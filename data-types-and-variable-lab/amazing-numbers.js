function amazingNumbers(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let result = sum.toString().includes("9");
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
amazingNumbers(1233)
amazingNumbers(999)

//.................................................

function amazingNumbers(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let isCountaining9 = sum.toString().includes("9");
    let result = isCountaining9 ? 
    `${num} Amazing? True` : 
    `${num} Amazing? False`
    console.log(result);
}
amazingNumbers(1233)
amazingNumbers(999)