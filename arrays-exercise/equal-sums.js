function equalSums(list) {   //first way
    let hasFoundResult = false
    for (let i = 0; i < list.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            let currentNumber = list[leftIndex];
            leftSum += currentNumber;
        }

        for (let rightIndex = i + 1; rightIndex < list.length; rightIndex++) {
            let currentNumber = list[rightIndex];
            rightIndex += currentNumber;
        }

        if (leftSum === rightSum) {
            console.log(i);
            hasFoundResult = true;
            break;

        }
    }
    if (!hasFoundResult) {
        console.log("no");
    }
}
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])

//.........................................................

function equalSums(arr) {   //second way
    let hasEqualSum = false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (j = i - 1; j >= 0; j--) {
            leftSum += arr[j]
        }

        for (let num = i + 1; num < arr.length; num++) {
            rightSum += arr[num];
        }

        if (leftSum === rightSum) {
            console.log(i);
            hasEqualSum = true;
        }
    }
    if (!hasEqualSum) {
        console.log("no");
    }
}
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])