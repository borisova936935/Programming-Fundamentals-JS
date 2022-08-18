function mergeArrays(firstArr, secondArr) {  //first way
    let firstArray = firstArr;
    let secondArray = secondArr;
    let resultArray = [];
    let firstLength = firstArr.length;
    //let secondLength = secondArr.length;

    for (let i = 0; i < firstLength; i++) {
        let resultArrElement;

        if (i % 2 === 0) {
            resultArrElement = Number(firstArray[i]) + Number(secondArray[i]);
        } else {
            resultArrElement = firstArray[i] + secondArray[i];
        }
        resultArray.push(resultArrElement)
    }
console.log(resultArray.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44'])

//........................................................................

function mergeArrays(firstList, secondList) {  //second way

    let newList = [];

    for (let i = 0; i < firstList.length; i++) {
        let firstListElement = firstList[i];
        let secondListElement = secondList[i];

        if (i % 2 === 0) {
            let sum = Number(firstListElement) + Number(secondListElement);
            newList.push(sum);
        } else {
            let result = firstListElement + secondListElement;
            newList.push(result);
        }
    }
    console.log(newList.join(" - "));
}
mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);
mergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);

//........................................................................

function mergeArrays(arrOne, arrTwo) {   //third way
    let arrThree = [];
    for (let i = 0; i < arrOne.length; i++) {
        if (i % 2 === 0) {
            arrThree.push(Number(arrOne[i])+ Number(arrTwo[i]))
        }else{
            arrThree.push(`${arrOne[i]}${arrTwo[i]}`)
        }
    }
    console.log(arrThree.join(" - "));
}
mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);
mergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);

