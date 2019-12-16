
//A calculator is a device in which a user enters a series of commands in order to calculates mathematical equations.
//User enters a series of numbers, a math operator and an "=" button in order to solve an equation.

//Create varaiables to help store targeted DOM Elements
let display = document.getElementById('display');
let entries = [];
let numberString = '';
let isPreviousResult = false;

listen();

function listen() {
    document.addEventListener('click', getButton)
}

function getButton() {
    let button = event.target.value;

    if (!isNaN(button) || button === '.') {
        number(button);
    } else if (button === 'AC') {
        allClear();
    } else if (button === 'CE') {
        clear();
    } else if (button === '=') {
        calculate();
    } else {
        storeNumber(button);
    }
}

function number(button) {
    if (button === '.' && numberString.includes('.')) {
        return;
    } else if (numberString.charAt(0) === '0' && numberString.length === 1 && button === '0') {
        return;
    } else {
        if (isPreviousResult === true) {
            numberString = '';
            isPreviousResult = false;
        }
        numberString += button;
        display.value = numberString;
    }
}

function allClear() {
    numberString = '';
    entries = [];
    display.value = '0';
}

function clear() {
    numberString = '';
    display.value = '0';
}

function storeNumber(button) {

    if (numberString === '' && entries.length === 0) {
        return;
    } else if (numberString === '') {
        entries.length = entries.length - 1;
        entries.push(button);
    } else {
        entries.push(numberString);
        entries.push(button);
        numberString = '';
    }
}


function calculate() {

    entries.push(numberString)
    let currentNumber = Number(entries[0]);
    for (var i = 0; i < entries.length; i++) {
        let mathOperator = entries[i];
        let nextNumber = Number(entries[i + 1]);
        
        if (mathOperator === '+') {
            currentNumber += nextNumber;
        } else if (mathOperator === '-') {
            currentNumber -= nextNumber;
        } else if (mathOperator === '÷') {
            currentNumber /= nextNumber;
        } else if (mathOperator === 'x') {
            currentNumber *= nextNumber;   
        } else if (mathOperator === '%') {
            currentNumber %= nextNumber;
        }
    }

    if (currentNumber < 0) {
        currentNumber = Math.abs(currentNumber) + '-';
    }

    display.value = currentNumber;
    numberString = JSON.stringify(currentNumber);
    isPreviousResult = true;
    entries = [];
}
