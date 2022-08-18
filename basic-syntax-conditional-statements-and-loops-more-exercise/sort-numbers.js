function sortNumbers(a, b, c) {
   
    let numbers = [];
    numbers.push(a);
    numbers.push(b);
    numbers.push(c);
    numbers.sort((a,b)=> b-a);
    console.log(numbers[0]);
    console.log(numbers[1]);
    console.log(numbers[2]);
    
}
sortNumbers(2, 1, 3)
sortNumbers(-2, 1, 3)
sortNumbers(0, 0, 2)