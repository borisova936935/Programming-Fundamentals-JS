function repeatString(str, rpt) {   //first way
    console.log(str.repeat(rpt));
}
repeatString("abc", 3)
repeatString("String", 2)

//.....................................................................

function repeatString(str, n) {   //second way
    let result = "";
    for(let i = 0; i<n; i++){
        result += str;
    }
    return result;
}
console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));

