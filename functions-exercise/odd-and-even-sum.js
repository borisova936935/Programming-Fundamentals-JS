function oddAndEvenSum(number) {
    let numberAsText = number.toString();
    function totalOddSum(numAsString) {
        let oddSum = 0;
        for (let i = 0; i < numAsString.length; i++) {
            let currentNum = Number(numAsString[i]);
            if (currentNum % 2 !== 0) {
                oddSum += currentNum;
            }

        }
    }
    console.log(totalOddSum(numberAsText));
}
oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)