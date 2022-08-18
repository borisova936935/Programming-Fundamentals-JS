function palindromeIntegers(inputArr) {
    let arrOfNums = inputArr;
    function isPalindrome(number){
        //123 => [1, 2, 3] => if 1 === 3;
        //[1, 2, 3] => [3, 2, 1] => 321
        let startNum = number;
        let reversedNum = (Number(number.toString().split("").reverse().join("")));
        if (startNum === reversedNum) {
            return true;
        }else{
            return false;
        }
    }
    for (let index = 0; index < arrOfNums.length; index++) {
        let currentNum = arrOfNums[index];
        console.log(isPalindrome(currentNum));
    }
}

palindromeIntegers([123, 323, 421, 121])
console.log("...");
palindromeIntegers([32, 2, 232, 1010])