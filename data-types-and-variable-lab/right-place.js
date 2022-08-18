function rightPlace(firstString, char, secondString) {
    let newString = firstString.replace("_", char);
    if (newString === secondString) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')

//..................................................................

function rightPlace(firstString, char, secondString) {
    let newString = firstString.replace("_", char);
    let result
    if (newString === secondString) {
        result = "Matched";
    } else {
        result = "Not Matched";
    }
    console.log(result);
}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')

//..................................................................

function rightPlace(firstString, char, secondString) {
    let newString = firstString.replace("_", char);
    let result = (newString === secondString) ? "Matched" : "Not Matched";
    console.log(result);
}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')