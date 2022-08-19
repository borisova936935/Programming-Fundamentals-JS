function emojiDetector(input) {
    let text = input[0];

    let smileyRegex = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/g;
    let digitRegex = /\d/g;

    let digits = text.match(digitRegex);
    let threshold = 1;
    digits.map(d => threshold *= Number(d));
    console.log(`Cool threshold: ${threshold}`);

    let validMatch;
    let emojis = [];

    while (validMatch = smileyRegex.exec(text)) {
        emojis.push(validMatch);
    }

    console.log(
        `${emojis.length} emojis found in the text. The cool ones are:`
    );

    for (let emojiMatch of emojis) {
        let emojiText = emojiMatch[2];
        let fullEmoji = emojiMatch[0];
        let coolness = 0;
       
        for (let letter of emojiText) {
            coolness += letter.charCodeAt();
        }
        if (coolness > threshold) {
            console.log(fullEmoji);
        }
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
