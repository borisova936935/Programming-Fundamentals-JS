function searchForANumber(array, input) {
    let numbersToTakeFromArr = input[0];
    let deleteNumsFromArr = input[1];
    let searchedNum = input[2];

    let myNewArr = array.splice(0, numbersToTakeFromArr);
    myNewArr = myNewArr.splice(deleteNumsFromArr);
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        if (myNewArr[index] === searchedNum) {
        count++;
        }
        
    }
    console.log(`Number ${searchedNum} occurs ${count} times.`);
}
searchForANumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]);

searchForANumber(
    [7, 1, 5, 8, 2, 7],
    [3, 1, 5]);