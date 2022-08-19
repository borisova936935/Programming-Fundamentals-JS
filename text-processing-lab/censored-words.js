function censoredWords(text, word){   //first way
    while(text.includes(word)){
        text = text.replace(word, "*".repeat(word.length));
    }
    console.log(text);
}
censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');

//................................................................

function censoredWords(text, word){   //second way
    let tokens = text.split(word);
    console.log(tokens.join("*".repeat(word.length)));
 }
 censoredWords('A small sentence with some words', 'small');
 censoredWords('Find the hidden word', 'hidden');
 