
//A calculator is a device in which a user enters a series of commands in order to calculates mathematical equations.
//User enters a series of numbers, a math operator and an "=" button in order to solve an equation.


//Create varaiables to help store targeted DOM Elements
let display = document.getElementById('display');
let decimal = document.getElementById('decimal');
let clear = document.getElementById('clear');
let numbers = document.getElementsByClassName('number');
let operators = document.getElementsByClassName('operator');

//create variables to store information
let entries = [];
let tempValue = '0';
let tempVal;
let isPreviousResult = false;


//Add event listeners to all buttons
for(let i = 0; i < numbers.length; i++){
    numbers[i] = document.addEventListener('click', updateDisplay) //,function)
}

for(let i = 0; i < operators.length; i++){
    operators[i] = document.addEventListener('click', calculate) //,function)
}

//Create a function that will update display
function updateDisplay (event) {
    let buttonClick = event.target.innerHTML;
    if(tempValue === "0"){
        tempValue = "";
    }
    //update content of button clicked
    tempValue += buttonClick;
    display.innerHTML = tempValue;
}

//Create function that will perform the mathematical operation for us
function calculate () {
    
    entries.push(tempValue)
    
    let currentNumber = Number(entries[0]);

    for(var i = 0; i < entries.length; i++){
        let nextNumber = Number(entries[i + 1]);
        let mathOperator = entries[i]
        if(mathOperator === '+') {
            return currentNumber += nextNumber;
        } else if (mathOperator === '-'){
            return currentNumber -= nextNumber;
        } else if (mathOperator === '÷'){
            return currentNumber /= nextNumber;
        } else if (mathOperator === 'x'){
            return currentNumber *= nextNumber;
        }
    }

    if(currentNumber < 0) {
        currentNumber = Math.abs(currentNumber) + '-';
    }

    display.value = currentNumber;
    tempValue = JSON.stringify(currentNumber);
    isPreviousResult = true;
    entries = [];
}

//function for allClear to wipe entries

//clear the current working display

//Create a function that will insert decimal points
