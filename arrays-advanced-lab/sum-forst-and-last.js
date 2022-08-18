function sumFirstAndLast(input){
let first = Number(input.shift());
let last = Number(input.pop());
let sum = first + last;
console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])

sumFirstAndLast(['5', '10'])