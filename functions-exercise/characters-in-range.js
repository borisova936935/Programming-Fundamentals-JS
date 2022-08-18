function charactersInRange(char1, char2) {   //first way
    for (let i = char1.charCodeAt(0) + 1; i <= char2.charCodeAt(0) - 1; i++) {
        console.log(i);
    }
}
charactersInRange('a', 'd')
charactersInRange('#', ':')
charactersInRange('C', '#')

//.......................................................................

function charactersInRange(char1, char2) {   //second way
    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endChar = Math.max(char2.charCodeAt(0), char1.charCodeAt(0));
    let charsInRange = [];

    for (let i = startChar + 1; i < endChar; i++) {
        charsInRange.push(String.fromCharCode(i));
    }
    console.log(charsInRange.join(" "));
}
charactersInRange('a', 'd')
charactersInRange('#', ':')
charactersInRange('C', '#')
