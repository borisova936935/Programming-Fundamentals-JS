function cutAndReverse(text) {
    let firstHalf = text.split("").slice(0, text.length / 2).reverse().join("");
    let secondHalf = text.split("").slice(text.length / 2, text.length).reverse().join("");
    console.log(firstHalf);
    console.log(secondHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
