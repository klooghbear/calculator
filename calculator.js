
//A calculator is a device in which a user enters a series of commands in order to calculates mathematical equations.
//User enters a series of numbers, a math operator and an "=" button in order to solve an equation.

//Create varaiables to help store targeted DOM Elements
let display = document.getElementById('display');
let decimal = document.getElementById('decimal');
let AC = document.getElementById('allClear');
let CE = document.getElementById('clear');

//create variables to store information
let entries = [];
let numberString = '0';
let isPreviousResult = false;

//Add event listeners to all numbers
function listenForNumbers() {
    let numbers = document.getElementsByClassName('number');
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = document.addEventListener('click', updateNumber);
    }
}

//Add event listener for all operators
function listenForOperators() {
    let operators = document.getElementsByClassName('opertor');
    for (let i = 0; i < operators.length; i++) {
        operators[i] = document.addEventListener('click', calculate) //,function)
    }
}

//Create a function that will update display
function updateNumber(event) {
    let buttonClick = event.target.innerHTML;
    numberString += buttonClick;
    display.innerHTML = numberString;
}

//Create function that will perform the mathematical operation for us
function calculate() {

    entries.push(numberString)

    let currentNumber = Number(entries[0]);

    for (var i = 0; i < entries.length; i++) {
        let nextNumber = Number(entries[i + 1]);
        let mathOperator = entries[i]
        if (mathOperator === '+') {
            return currentNumber += nextNumber;
        } else if (mathOperator === '-') {
            return currentNumber -= nextNumber;
        } else if (mathOperator === '÷') {
            return currentNumber /= nextNumber;
        } else if (mathOperator === 'x') {
            return currentNumber *= nextNumber;
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

//function for allClear to wipe entries
function allClear() {
    numberString = '';
    entries = [];
    display.value = '0';
}

//clear the current working display
function clear() {
    numberString = '';
    display.value = '0';
}

//Create a function that will insert decimal points
function decimalPoint() {
    if (!numberString.includes('.')) {
        numberString += '.';
    }
    display.innerHTML = numberString;
}