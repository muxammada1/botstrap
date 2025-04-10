let expression = '';

function appendNumber(num) {
  document.getElementById('display').value += num;
  expression += num;
}

function appendOperator(op) {
  document.getElementById('display').value += op;
  expression += op;
}

function clearDisplay() {
  document.getElementById('display').value = '';
  expression = '';
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}
