function rotateArray(arr){
    let resultArr = arr
    let rotations = arr.pop();
    for(let i = 0; i <rotations; i++){
        let getnum = arr.pop();
        resultArr.unshift(getnum);
    }
    console.log(resultArr.join(" "));
}
rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])