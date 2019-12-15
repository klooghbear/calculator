
//A calculator is a device in which a user enters a series of commands in order to calculates mathematical equations.
//User enters a series of numbers, a math operator and an "=" button in order to solve an equation.


//Create varaiables to help store targeted DOM Elements
let display = document.getElementById("display");
let decimal = document.getElementById("decimal");
let clear = document.getElementById("clear");
let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");

//create variables to store information
let entries = [];
let currentNumber = '';
let tempVal;

//Add event listeners to all buttons
for(let i = 0; i < numbers.length; i++){
    numbers[i] = document.addEventListener('click') //,function)
}

for(let i = 0; i < operators.length; i++){
    operators[i] = document.addEventListener('click') //,function)
}

//Create a function that will update display
function updateDisplay (event) {
    let buttonClick = event.target.innerText;
    if(display === "0"){
        display = "";
    }
    //update content of button clicked
    display += buttonClick;
    displayText.innerText = display;
}

//Create function that will perform the mathematical operation for us

//function for allClear to wipe entries

//clear the current working display

//Create a function that will insert decimal points
