function loadingBar(num) {
    let bar = "";
    for (i = 0; i < 10; i++) {
        if (i + 1 > num / 10) {
            bar += ".";
        } else {
            bar += "%";
        }
    }
    if (num == 100) {
        console.log("100% Complete!");
        console.log(`[${bar}]`);
    } else {
        console.log(`${num}% [${bar}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(30);
console.log("...");
loadingBar(50);
console.log("...");

loadingBar(100);
