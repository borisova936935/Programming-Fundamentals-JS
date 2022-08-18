function simpleCalculator(numOne, numTwo, operator) {

    let output;

    switch (operator) {
        case 'multiply': output = numOne * numTwo; break;
        case 'divide': output = numOne / numTwo; break;
        case 'add': output = numOne + numTwo; break;
        case 'subtract': output = numOne - numTwo; break;
    }
    console.log(output);
}
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')