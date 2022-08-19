function letterChangeNumbers(text) {
    let words = text.split(" ").filter((el) => el !== "");
    let totalSum = 0;

    let isUpperCase = (letter) => letter.toUpperCase() === letter;
    let getAlphabetPosition = (letter) => letter.charCodeAt(0) - 96;

    words.forEach((word) => {
        let letterBefore = word[0];
        let letterAfter = word[word.length - 1];
        let number = Number(word.substring(1, word.length - 1));
        let beforePosition = getAlphabetPosition(letterBefore.toLowerCase());
        let afetrPosition = getAlphabetPosition(letterAfter.toLowerCase());

        if (isUpperCase(letterBefore)) {
            number /= beforePosition;
        } else {
            number *= beforePosition;
        }

        if (isUpperCase(letterAfter)) {
            number -= afetrPosition;
        } else {
            number += afetrPosition;
        }
        totalSum += number
    });
    console.log(totalSum.toFixed(2));
}
letterChangeNumbers('A12b s17G');
letterChangeNumbers('P34562Z q2576f   H456z');
letterChangeNumbers('a1A');