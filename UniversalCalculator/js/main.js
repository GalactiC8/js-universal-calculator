window.onload = function () {
    const inputA = document.getElementById('input_a');
    const selectOperation = document.querySelector('.select_operation');
    const inputB = document.getElementById('input_b');
    const buttonResult = document.querySelector('.buttonResult');
    const output = document.querySelector('.output');

    const inputA_RE = document.getElementById('input_a_re');
    const inputA_IM = document.getElementById('input_a_im');
    const selectOperationComplex = document.querySelector('.select_operation_complex');
    const inputB_RE = document.getElementById('input_b_re');
    const inputB_IM = document.getElementById('input_b_im');
    const buttonResultComplex = document.querySelector('.buttonResultComplex');
    const outputComplex = document.querySelector('.outputComplex');

    buttonResult.addEventListener('click', function() {
        const a = inputA.value - 0;
        const b = inputB.value - 0;
        const operation = selectOperation.value;
        const realCalc = new RealCalculator;
        output.innerHTML = realCalc[operation](a, b);
    });

    buttonResultComplex.addEventListener('click', function() {
        const a = new Complex(inputA_RE.value, inputA_IM.value);
        const b = new Complex(inputB_RE.value, inputB_IM.value);
        const operation = selectOperationComplex.value;
        const complexCalc = new ComplexCalculator;
        const {re, im} = complexCalc[operation](a, b);
        outputComplex.innerHTML = `Re: ${re} Im: ${im}`
    });
} 
