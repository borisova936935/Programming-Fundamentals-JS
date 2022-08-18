function commonElements(firstArr, secondArr) { //first way

    let firstArray = firstArr;
    let secondArray = secondArr;
    let firstLength = firstArr.length;
    let secondLength = secondArr.length;

    for (let i = 0; i < firstLength; i++) {
        let firstArrElement = firstArray[i];

        for (let j = 0; j < secondLength; j++) {
            let secondArrElement = secondArray[j];
            if (firstArrElement === secondArrElement) {
                console.log(firstArrElement);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])


//.........................................................

function commonElements(firstArr, secondArr) {  //second way

    let firstArray = firstArr;
    let secondArray = secondArr;
    let firstLength = firstArr.length;

    for (let i = 0; i < firstLength; i++) {
        let firstArrElement = firstArray[i];

        if (firstArray.includes(firstArrElement) && secondArray.includes(firstArrElement)) {
            console.log(firstArrElement);
        }

    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])

//...............................................................

function commonElements(firstArr, secondArr) { //third way

    for (let i = 0; i < firstArr.length; i++) {
        let firstArrElement = firstArr[i];

        for (let j = 0; j < secondArr.length; j++) {
            let secondArrElement = secondArr[j];

            if (firstArrElement === secondArrElement) {
                console.log(firstArrElement);
            }
        }
    }

}
commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);
commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);

//............................................................

function commonElements(firstArr, secondArr) {  //fourth way

    for (let i = 0; i < firstArr.length; i++){
        for(let j = 0; j < secondArr.length; j++){
            if(firstArr[i]===secondArr[j]){
                console.log(firstArr[i]);
            }
        }
    }
}
commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);
commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);