function printAndSum(start, end){

    let output = ""
    let result = 0;
for(let i = start; i <= end; i++){
    output += `${i} `;
    result += i;
}
console.log(output);
console.log(`Sum: ${result}`);
}
printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)