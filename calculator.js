
//A calculator is a device in which a user enters a series of commands in order to calculates mathematical equations.
//User enters a series of numbers, a math operator and an "=" button in order to solve an equation.

//Create varaiables to help store targeted DOM Elements
let display = document.getElementById('display');

//create variables to store information
//Add array to store entries
let entries = [];
//Add blank string to store numbers as a string
let numberString = '';
//Add variable to check if there was a previous result
let isPreviousResult = false;

//Start the application
listen();

//function to add listeners
function listen() {
    document.addEventListener('click', getButton)
}

//get button values
function getButton() {
    //declare new variable to store what button was pressed
    let button = event.target.value;

    //Evaluate what button is pressed and call the appropriate function
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

//Function to get number and return as a string
function number(button) {
    //check for decimals
    if (button === '.' && numberString.includes('.')) {
        return;
    //dont return multiple zeros infront of the dislayed string
    } else if (numberString.charAt(0) === '0' && numberString.length === 1 && button === '0') {
        return;
    //check if there was a previous result
    } else {
        if (isPreviousResult === true) {
            numberString = '';
            isPreviousResult = false;
        }
        //return the result to the display on the screen
        numberString += button;
        display.value = numberString;
    }
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

//function to store the variable
function storeNumber(button) {

    //check if there are no entries
    if (numberString === '' && entries.length === 0) {
        return;
    //if teh string is blank then clear the previous entry in the array and push.(operator)
    } else if (numberString === '') {
        entries.length = entries.length - 1;
        entries.push(button);
    //if none of the previous eventuate, push the value stored in numberString to entries array
    } else {
        entries.push(numberString);
        entries.push(button);
        numberString = '';
    }
}

//Create function that will perform the mathematical operation for us
function calculate() {
    //add entries to the array
    entries.push(numberString)
    //create a new variable to hold the value and loop through the array or entries
    let currentNumber = Number(entries[0]);
    for (var i = 0; i < entries.length; i++) {
        //create new variable to store the math operators
        let mathOperator = entries[i];
        //create variable for the next entry
        let nextNumber = Number(entries[i + 1]);
        
        //if addition return
        if (mathOperator === '+') {
            currentNumber += nextNumber;
        //if subtraction return
        } else if (mathOperator === '-') {
            currentNumber -= nextNumber;
        //if division return
        } else if (mathOperator === '÷') {
            currentNumber /= nextNumber;
        //if multiplication return
        } else if (mathOperator === 'x') {
            currentNumber *= nextNumber;
        //if modulus return    
        } else if (mathOperator === '%') {
            currentNumber %= nextNumber;
        }
    }

    //add coniditon for negative numbers
    if (currentNumber < 0) {
        currentNumber = Math.abs(currentNumber) + '-';
    }

    //display the result in the display
    display.value = currentNumber;
    //convert the result into a string
    numberString = JSON.stringify(currentNumber);
    //set the previous result bool to true
    isPreviousResult = true;
    //clear all entries
    entries = [];
}
