window.onload = function () {
    const inputA = document.querySelector('.input_a');
    const selectOperation = document.querySelector('.select_operation');
    const inputB = document.querySelector('.input_b');
    const buttonResult = document.querySelector('.buttonResult');
    const output = document.querySelector('.output');

    buttonResult.addEventListener('click', function() {
        const a = inputA.value - 0;
        const b = inputB.value - 0;
        const operation = selectOperation.value;
        const result = calculate({ a, b, operation });

        output.innerHTML = result;
    });
}