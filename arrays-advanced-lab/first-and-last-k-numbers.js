function firstAndLastKNumbers(input) {
    let k = input.shift();
    
    let first = input.slice(0, k);
    let last = input.slice(-k)
    console.log(first.join(" "));
    console.log(last.join(" "));
}
firstAndLastKNumbers([2, 7, 8, 9])

firstAndLastKNumbers([3, 6, 7, 8, 9])