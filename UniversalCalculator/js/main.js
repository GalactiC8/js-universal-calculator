window.onload = function () {
  const operandHandler = (event) => {
    const calc = new Calculator();
    const a = calc.getValue(document.getElementById("input_a").value);
    const b = calc.getValue(document.getElementById("input_b").value);
    const operand = event.target.dataset.operand;
    const result = calc[operand](a, b);
    if (result === null) {
      document.getElementById("output_c").value = "Недопустимая операция";
    } else {
      document.getElementById("output_c").value = result.toString();
    }
  };

  const buttons = document.querySelectorAll(".operand");
  buttons.forEach((button) => {
    button.addEventListener("click", operandHandler);
  });

  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", function () {
    document.getElementById("input_a").value = null;
    document.getElementById("input_b").value = null;
    document.getElementById("output_c").value = null;
  });
};
