function reverseAnArrayOfStrings(arr) {
    let revArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i])
    }
    console.log(revArr.join(" "));
}
reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop'])
reverseAnArrayOfStrings(['33', '123', '0', 'dd'])

//............................................................

function reverseAnArrayOfStrings(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let buffer = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = buffer;
    }
    console.log(arr.join(" "));
}
reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop'])
reverseAnArrayOfStrings(['33', '123', '0', 'dd'])