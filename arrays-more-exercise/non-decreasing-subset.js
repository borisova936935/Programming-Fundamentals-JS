function nonDecreasingSubset(arr) {
    let result = [];
    let firstNum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= firstNum) {
            result.push(arr[i])
            firstNum = arr[i]
        }
    }
    console.log(result.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubset([1, 2, 3, 4])
nonDecreasingSubset([20, 3, 2, 15, 6, 1])