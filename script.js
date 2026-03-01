function calculate(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = 0;

    if (operator === '+') result = num1 + num2;
    if (operator === '-') result = num1 - num2;
    if (operator === '*') result = num1 * num2;
    if (operator === '/') result = num1 / num2;

    document.getElementById("result").innerText = result;
}
