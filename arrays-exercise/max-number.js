function maxNumber(input) {   //first way
	let arr = input;
	let arr2 = [];
	let maxNum = 0;

	for (let i = 0; i < arr.length; i++) {
		maxNum = Math.max(...arr);
		if (arr[i] === maxNum) {
			arr2.push(maxNum);
			arr[i] = 0;
		}
	}
	let onlyUniqueNums = [...new Set(arr2)];

	console.log(onlyUniqueNums.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);

// //..................................................................

function maxNumber(list) {   //second way
    let topIntegers = [];
    for (let i = 0; i < list.length; i++) {
        let currentNumber = list[i];
        let isTop = true;
        for (let j = i + 1; j < list.length; j++) {
            let rightNumber = list[j];
            if (rightNumber >= currentNumber) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topIntegers.push(currentNumber);
        }
    }
    console.log(topIntegers.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);

//..................................................................

function maxNumber(arr) {   //third way
    let topInteger = [];
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let isTopInteger = true;
        
        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];
            if (currentElement <= nextElement) {
                isTopInteger = false;
                break;
            }
        }

        if (isTopInteger) {
            topInteger.push(currentElement)
        }
    }
    console.log(topInteger.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);

