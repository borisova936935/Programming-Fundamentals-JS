function arrayRotation(list, rotations) {  //first way
    for (let i = 0; i < rotations; i++) {
        let numberToMove = list.shift();
        list.push(numberToMove);
    }
    console.log(list.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)


//..........................................................................

function arrayRotation(list, rotations) {   //second way
    for (let i = 0; i < rotations; i++) {
        let firstElement = list[0];
        for (let j = 0; j < list.length - 1; j++) {
            list[j] = list[j + 1];
        }
        let lastIndex = list.length - 1;
        list[lastIndex] = firstElement;
    }
    console.log(list.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)

//..........................................................................

function arrayRotation(arr, rotation) {   //third way
    for (let i = 0; i < rotation; i++) {
        let currentNum = arr.shift()
        arr.push(currentNum);
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)
