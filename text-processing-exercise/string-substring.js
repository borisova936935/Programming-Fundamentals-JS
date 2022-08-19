function stringSubstring(searchedWord, sentence) {
    let words = sentence.split(" ");
    for (const word of words) {
        if(searchedWord.toLowerCase() === word.toLowerCase()){
            console.log(searchedWord);
            return;
        }
    }
    console.log(`${searchedWord} not found!`);
}
stringSubstring('javascript',
    'JavaScript is the best programming language');
stringSubstring('python',
    'JavaScript is the best programming language');
