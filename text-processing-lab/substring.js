function substring(str, index, count) {
    let result = str.substring(index, count + index);
    console.log(result);
}
substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);