function getValues() {
  let num1 = parseFloat(document.getElementById("num1").value) || 0;
  let num2 = parseFloat(document.getElementById("num2").value) || 0;
  return { num1, num2 };
}

function display(result) {
  document.getElementById("result").innerText = result;
}

function add() {
  let { num1, num2 } = getValues();
  display(num1 + num2);
}

function subtract() {
  let { num1, num2 } = getValues();
  display(num1 - num2);
}

function multiply() {
  let { num1, num2 } = getValues();
  display(num1 * num2);
}

function divide() {
  let { num1, num2 } = getValues();
  if (num2 === 0) {
    display("Error: Division by 0");
  } else {
    display(num1 / num2);
  }
}

function square() {
  let { num1 } = getValues();
  display(num1 * num1);
}

function cube() {
  let { num1 } = getValues();
  display(num1 * num1 * num1);
}