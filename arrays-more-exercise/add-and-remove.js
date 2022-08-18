function addAndRemove(arr) {
    let number = 0;
    let resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        number++;
        let command = arr[i];
        if (command === "add") {
            resultArray.push(number);
        }else if (command === "remove") {
            resultArray.pop()
        }
    }
    if(resultArray.length < 1){
        console.log("Empty");
    }else{
        console.log(resultArray.join(" "));
    }
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);