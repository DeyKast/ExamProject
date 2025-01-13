const firstNum = document.getElementById("op1");
const secondNum = document.getElementById("op2");
const result = document.getElementById("res");
const addButton = document.getElementById("add-button");
const subButton = document.getElementById("sub-button");
const mulButton = document.getElementById("mul-button");
const divButton = document.getElementById("div-button");
const logButton = document.getElementById("log-button");
const sinButton = document.getElementById("sin-button");
const tanButton = document.getElementById("tan-button");

function calculate(operation) {
  const num1 = parseFloat(firstNum.value);
  const num2 = parseFloat(secondNum.value);

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  let res;
  switch (operation) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        res = "Cannot divide by zero.";
      } else {
        res = num1 / num2;
      }
      break;
    case "log":
      res = Math.log(num1);
      break;
    case "sin":
      res = Math.sin(num1);
      break;
    case "tan":
      res = Math.tan(num1);
    default:
      res = "Invalid operation.";
      break;
  }

  result.textContent = `Result: ${res}`;
}

addButton.addEventListener("click", () => calculate("+"));
subButton.addEventListener("click", () => calculate("-"));
mulButton.addEventListener("click", () => calculate("*"));
divButton.addEventListener("click", () => calculate("/"));
logButton.addEventListener("click", () => calculate("log"));
sinButton.addEventListener("click", () => calculate("sin"));
tanButton.addEventListener("click", () => calculate("tan"));
