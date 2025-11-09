let display = document.getElementById('result');
let errorDiv = document.getElementById('error');

function appendToDisplay(value) {
    errorDiv.textContent = '';
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
    errorDiv.textContent = '';
}

function deleteLast() {
    errorDiv.textContent = '';
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

async function calculate() {
    errorDiv.textContent = '';
    try {
        const response = await fetch('/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                expression: display.value
            })
        });

        const data = await response.json();

        if (response.ok) {
            display.value = data.result;
        } else {
            errorDiv.textContent = 'Error: ' + (data.error || 'Invalid expression');
            setTimeout(() => {
                errorDiv.textContent = '';
            }, 3000);
        }
    } catch (error) {
        errorDiv.textContent = 'Error: Failed to calculate';
        setTimeout(() => {
            errorDiv.textContent = '';
        }, 3000);
    }
}

// Allow keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === '.' || key === '(' || key === ')') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
