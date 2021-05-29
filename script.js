// select decimal, clear, backspace and total(result) buttons and save them in variables
var decimalBtn = document.getElementById("decimal");
var clearBtn = document.getElementById("clear-btn");
var backspaceBtn = document.getElementById("backspace");
var displayedResult = document.getElementById("displayed-result");

// select number buttons and save them in variables 0-9
var calcNumBtns = document.getElementsByClassName("calc-btn-num");
console.log(calcNumBtns.length);
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
  pendingVal = displayVal;
  displayVal = "0";
  displayedResult.innerText = displayVal;
  operationsArray.push(pendingVal);
  operationsArray.push("+");
}

function calcMinus() {
  pendingVal = displayVal;
  displayVal = "0";
  displayedResult.innerText = displayVal;
  operationsArray.push(pendingVal);
  operationsArray.push("-");
}

function calcMultiply() {
  pendingVal = displayVal;
  displayVal = "0";
  displayedResult.innerText = displayVal;
  operationsArray.push(pendingVal);
  operationsArray.push("*");
}

function calcDivide() {
  pendingVal = displayVal;
  displayVal = "0";
  displayedResult.innerText = displayVal;
  operationsArray.push(pendingVal);
  operationsArray.push("/");
}

function calcEquals() {
  operationsArray.push(displayVal);
  var evaluation = eval(operationsArray.join(" "));
  displayVal = evaluation + "";
  displayedResult.innerText = displayVal;
  operationsArray = [];
}

plusBtn.addEventListener("click", calcPlus);
minusBtn.addEventListener("click", calcMinus);
multiplyBtn.addEventListener("click", calcMultiply);
divideBtn.addEventListener("click", calcDivide);
equalBtn.addEventListener("click", calcEquals);

// the equal function will use .join(' ')); // ['2', '+', '3'] => '2 + 3'

// create a function to update the total result
function updateDisplayVal(clickObj) {
  var btnText = clickObj.target.innerText;
  if (displayVal === "0") {
    displayVal = "";
  }
  displayVal = displayVal + btnText;
  displayedResult.innerText = displayVal;
}

// loop through all number buttons

// add an event listener for each button to update the value on click
for (var i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener("click", updateDisplayVal, false);
}

// create backspace button function - call it on click of backspace
// if the current value has just 1 number should remove it and add 0, otherwise delete the last number that wass added.

backspaceBtn.onclick = () => {
  var lengthOfDisplayVal = displayVal.length;

  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
  if (displayVal === "") {
    displayVal = "0"; //fix to have at least number 0 visible
  }
  displayedResult.innerHTML = displayVal; //update displayVal
};

// create decimal button function

// create clear button function - call it on click of AC button
clearBtn.onclick = () => {
  displayVal = "0";
  pendingVal = "undefined"; //since we clear everything
  operationsArray = [];
  displayedResult.innerHTML = displayVal; //update displayVal
};
