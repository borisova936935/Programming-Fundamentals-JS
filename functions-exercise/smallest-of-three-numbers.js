function smallestOfThreeNumbers(a, b, c) {   //first way
    let smallestNum = Math.min(a, b, c);
    console.log(smallestNum);
}
smallestOfThreeNumbers(2, 5, 3)
smallestOfThreeNumbers(600, 342, 123)
smallestOfThreeNumbers(25, 21, 4)
smallestOfThreeNumbers(2, 2, 2)

//.........................................................

function smallestOfThreeNumbers(a, b, c) {   //second way
    let smallestNum = function (a, b, c) {
        let smallestNumber = 0;
        if (a <= b && a < c) {
            smallestNumber = a;
        } else if (b <= a && b <= c) {
            smallestNumber = b
        } else {
            smallestNumber = c;
        }
        return smallestNumber;
    };
    console.log(smallestNum(a, b, c));
}
smallestOfThreeNumbers(2, 5, 3)
smallestOfThreeNumbers(600, 342, 123)
smallestOfThreeNumbers(25, 21, 4)
smallestOfThreeNumbers(2, 2, 2)

//.............................................................

function smallestOfThreeNumbers(a, b, c) {   //third way
    let smallestNum = (a, b, c) => Math.min(a, b, c)
  
    console.log(smallestNum(a, b, c));
}
smallestOfThreeNumbers(2, 5, 3)
smallestOfThreeNumbers(600, 342, 123)
smallestOfThreeNumbers(25, 21, 4)
smallestOfThreeNumbers(2, 2, 2)