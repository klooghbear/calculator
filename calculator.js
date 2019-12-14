//In any order, I should be able to add, stubtract, multiply, and divide a chain of numbers of any length, and whien I hit =, the correct result should be shown in the element with the id of display

//When inputting numbers, my calculator should not allow a number to begin with mupltiple zeros

//When the decimal element is clicked, a should append to the currently displayed value; two . in one number should not be accepted.

//I should be able to perform and opeation (+, - , *. /) on numbers containing decimal points

//If 2 or more operatirs are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-)sign). For example if 5 + * 7 = is entered the result should be 35 (ie 5*7); if 5 * - 5 = is entered the result should be -25(ie. 5 * (-5))

//Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation

//My Calculator should have several decimal places of precision when it comes to rounding ( note that there is no exact standard, but your should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places

//

//create array/object to store information
var display = [
    
]

//function for addition
function sum(a, b) {
    return a + b;
}

//function for subtraction
function difference(a, b) {
    return a - b;
}

//function for multiplication
function product(a, b) {
    return a * b;
}

//function for division
function quotient(a, b){
    return a / b;
}

//function for equals?//

//function for allClear

//function for clearEntry

//function for displayAnswer

sum(9, 10)

difference(10, 9)

product(5, 5)

quotient(8, 2)

