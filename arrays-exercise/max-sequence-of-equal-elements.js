function maxSequenceOfEqualElements(arr) {
    let newArray = [];
    let firstArray = [];

    for (let i = 0; i < arr.length; i++) {
        firstArray = [];

        for (let j = i; j < arr.length; j++) {
            
            if (arr[i] === arr[j]) {
                firstArray.push(arr[j]);
            } else {
                break;
            }

            if(firstArray.length > newArray.length){
                newArray = firstArray;
            }
        }
    }
    console.log(newArray.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])