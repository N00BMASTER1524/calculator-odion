let currentInput = '';  // Store the current input (number or operator)
let firstNumber = null;  // Store the first number in the calculation
let secondNumber = null; // Store the second number in the calculation
let operator = null;     // Store the operator for the calculation

const display = document.getElementById('display');

function appendNumber(number) {
  currentInput += number; // Append the number to the current input
  display.textContent = currentInput; // Update the display to show the current input
}

function setOperator(newOperator) {
  if (currentInput === '') return;  // Prevent setting operator without number

  if (firstNumber === null) {
    firstNumber = parseFloat(currentInput); // Store the first number
    operator = newOperator;                // Store the operator
    currentInput = '';                     // Reset current input for second number
  } else if (operator !== null && currentInput !== '') {
    // If there's an existing operator, calculate the result first
    secondNumber = parseFloat(currentInput);
    firstNumber = operate(operator, firstNumber, secondNumber);  // Perform calculation
    display.textContent = firstNumber;  // Display the result
    operator = newOperator;             // Set new operator
    currentInput = '';                  // Reset current input for new number
  } else {
    operator = newOperator;             // Just update the operator if second number isn't entered yet
  }
  display.textContent += ' ' + newOperator;  // Show operator on the display
}

function calculate() {
  if (operator !== null && currentInput !== '') {
    secondNumber = parseFloat(currentInput);
    const result = operate(operator, firstNumber, secondNumber);
    display.textContent = result; // Display the result
    firstNumber = result;         // Store the result as the first number for the next calculation
    operator = null;              // Clear the operator
    currentInput = '';            // Reset current input
  }
}

function clearDisplay() {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  currentInput = '';
  display.textContent = '0';  // Reset display to '0'
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return null;
  }
}

// Basic math operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Error: Cannot divide by 0!");
    return null;
  }
  return a / b;
}
