let displayValue = '';
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let symbols = ['+', '-', '*', '/'];

function appendToDisplay(value) {
    if (numbers.includes(value) || symbols.includes(value)) {
        displayValue += value;
        document.getElementById('display').value = displayValue;
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

