// select decimal, clear, backspace and total(result) buttons and save them in variables
var decimalBtn = document.getElementById("decimal");
var clearBtn = document.getElementById("clear-btn");
var backspaceBtn = document.getElementById("backspace");
var displayedResult = document.getElementById("displayed-result");

// select number buttons and save them in variables 0-9
var calcNumBtns = document.getElementsByClassName("calc-btn-num");

// select operator buttons and save them in variables +,-,*,/
var plusBtn = document.getElementById("plus-btn");
var minusBtn = document.getElementById("minus-btn");
var multiplyBtn = document.getElementById("multiply-btn");
var divideBtn = document.getElementById("divide-btn");
var equalBtn = document.getElementById("equal-btn");

// declare variable to display 0 by default - on load, on reset and on of any operators
var displayVal = "0";

// create a variable and declare the pending variable - undefined initially. - will store the value that was typed first.
var pendingVal;

// create an variable - initially empty array - holding the operations that were pressed
var operationsArray = [];

// create functions for all operations: plus, minus, multiply, divide & equal
// push to array the pending value, operation and second value
function calcPlus() {
  console.log("ok");
}

plusBtn.addEventListener("click", calcPlus);

// the equal function will use .join(' ')); // ['2', '+', '3'] => '2 + 3'

// create a function to update the total result

// loop through all number buttons
// add an event listener for each button to update the value on click

// loop through all operator buttons
// add an event listener for each button to update the value on click

// create clear button function - call it on click of AC button

// create backspace button function - call it on click of backspace
// if the current value has just 1 number should remove it and add 0, otherwise delete the last number that wass added.

// create decimal button function
