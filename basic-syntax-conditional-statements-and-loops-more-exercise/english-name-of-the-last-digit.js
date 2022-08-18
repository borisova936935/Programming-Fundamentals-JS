function englishNameOfTheLastDigit(number){
    let numToString = number.toString().split("");
    let lastNumber = numToString[numToString.length-1];
    let englishName = ""
    switch(lastNumber){
        case "0": englishName = "zero"; break;
        case "1":englishName = "one"; break;
        case "2":englishName = "two"; break;
        case "3":englishName = "three"; break;
        case "4":englishName = "four"; break;
        case "5":englishName = "five"; break;
        case "6":englishName = "six"; break;
        case "7":englishName = "seven"; break;
        case "8":englishName = "eight"; break;
        case "9":englishName = "nine"; break;
    }
    console.log(englishName);
}
englishNameOfTheLastDigit(512)
englishNameOfTheLastDigit(1)
englishNameOfTheLastDigit(1643)