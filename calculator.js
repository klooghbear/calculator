
//A calculator is a device in which a user enters a series of commands in order to calculates mathematical equations.
//User enters a series of numbers, a math operator and an "=" button in order to solve an equation.

document.addEventListener('DOMContent', initialiseCalculator)

//create variables to store information into an array, store result of an equation and the current number
let entries = [];
let currentNumber = '';
let result = 0;

//initialise the display which will include functions
function initialiseCalculator() {
    inputNumber();
}

//function to get number input based on user click
function inputNumber() {
    let number = document.getElementsByClassName("number");
    for(i = 0; i < number.length; i++){
        number[i].addEventListener('click', clickNumber);
    }
}

//function to return number output based on input
function clickNumber(event) {
    let value = event.target.innerHTML;
    currentNumber = currentNumber + value;
    entries.push(currentNumber)
    updateDisplay();
}

//function to get operator input based on user click 
function inputOperator() {
    let operator = document.getElementsByClassName('operator');
    for(i = 0; i < operator.length; i++){
        operator[i].addEventListener('click', clickOperator);
    }
}

function clickOperator(event) {
    let mathOperator = event.target.innerHTML;
    entries.push(operator);
    currentNumber = "";
    updateDisplay();
}

//function to display the string on screen
function updateDisplay() {
    let.display = document.getElementById('display');
    display.innerHTML = currentNumber;
}

//function for allClear to wipe entries
function allClear () {
    currentNumber = '';
    entries = [];   
    display.value = 0;
}

//clear the current working display
function clear () {
    currentNumber = '';
    display.value = 0;
}