function countStringsOccurrances(text, word) {   //first way
    let tokens = text.split(" ");
    let counter = 0;
    for (let token of tokens) {
        if (token === word) {
            counter++;
        }
    }
    console.log(counter);
}
countStringsOccurrances(
    'This is a word and it also is a sentence',
    'is');
countStringsOccurrances(
    'softuni is great place for learning new programming languages',
    'softuni');

//........................................................................

function countStringsOccurrances(text, word) {   //second way
    let tokens = text.split(" ");
    let counter = tokens.filter(x => x === word)

    console.log(counter.length);
}
countStringsOccurrances(
    'This is a word and it also is a sentence',
    'is');
countStringsOccurrances(
    'softuni is great place for learning new programming languages',
    'softuni');