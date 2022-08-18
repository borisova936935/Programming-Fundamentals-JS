function evenAndOddSubtraction(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let number of arr) {
        if (number % 2 === 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }
    let diff = sumEven - sumOdd;
    console.log(diff);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])
evenAndOddSubtraction([3, 5, 7, 9])
evenAndOddSubtraction([2, 4, 6, 8, 10])