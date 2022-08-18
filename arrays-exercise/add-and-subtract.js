function addAndSubstract(input) {   //first way
    let arrOfNumbers = input;
    let modifyNumberArr = [];
    let firstArrSum = 0;
    let secondArrSum = 0;
    let arrLength = arrOfNumbers.length;

    for (let i = 0; i < arrLength; i++) {
        let currentNumber = arrOfNumbers[i];

        firstArrSum += currentNumber;
        let newNumber;

        if (currentNumber % 2 === 0) {
            newNumber = currentNumber + i;
        } else {
            newNumber = currentNumber - i;
        }
        modifyNumberArr.push(newNumber);
        secondArrSum += newNumber;
    }
    console.log(modifyNumberArr);
    console.log(firstArrSum);
    console.log(secondArrSum);
}
addAndSubstract([5, 15, 23, 56, 35])
addAndSubstract([-5, 11, 3, 0, 2])

//.........................................................

function addAndSubstract(list) {   //second way
    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i < list.length; i++) {

        let currentNumber = list[i];
        let newNumber;
        if (currentNumber % 2 === 0) {
            newNumber = currentNumber + i;
            list[i] = newNumber;
        } else {
            newNumber = currentNumber - i;
            list[i] = newNumber;
        }
        oldSum += currentNumber;
        newSum += newNumber;
    }
    console.log(list);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35])
addAndSubstract([-5, 11, 3, 0, 2])

//.........................................................

function addAndSubstract(arr) {  //third way

    let myArr = arr;
    let sumOfOriginalArr = 0;
    let modifiedArrSum = 0;
    for (let i = 0; i < myArr.length; i++) {
        sumOfOriginalArr += myArr[i];
        if (myArr[i] % 2 === 0) {
            myArr[i] += i;
        } else {
            myArr[i] -= i;
        }
        modifiedArrSum+=myArr[i];
    }
    console.log(myArr.join(" "));
    console.log(sumOfOriginalArr);
    console.log(modifiedArrSum);
}
addAndSubstract([5, 15, 23, 56, 35])
addAndSubstract([-5, 11, 3, 0, 2])