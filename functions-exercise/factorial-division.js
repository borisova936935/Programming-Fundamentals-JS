function factorialDivision(num, devider) {
  console.log(`${(facDivision(num) / facDivision(devider)).toFixed(2)}`);

  function facDivision(number) {
    let sum = 1;
    for (i = number; i >= 1; i--) {
      sum *= i;
    }
    return sum;
  }
}
factorialDivision(5, 2);
factorialDivision(6, 2);
