function passwordGenerator(input) {
    [firstString, secondtString, thirdString] = input;
    let combinedString = firstString.concat(secondtString);
    let vowels = ["a", "e", "i", "o", "u"];
    let reversedPassword = "";
    thirdString = thirdString.toLowerCase();
    let vowelIndex = 0;

    for (let i = 0; i < combinedString.length; i++) {
        if (vowels.includes(combinedString[i])) {
            let indexOfChar = vowelIndex % thirdString.length;
            vowelIndex++;
            let currentChar = thirdString.charAt(indexOfChar);
            reversedPassword += currentChar.toUpperCase();
        } else {
            reversedPassword += combinedString[i]
        }
    }
    console.log(
        `Your generated password is ${reversedPassword
            .split("")
            .reverse()
            .join("")}`
    );
}
passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
]);
passwordGenerator([
    'easymoneyeazylife',
    'atleasttencharacters',
    'absolute'
]);
passwordGenerator([
    'areyousureaboutthisone',
    'notquitebutitrustyou',
    'disturbed'
]);