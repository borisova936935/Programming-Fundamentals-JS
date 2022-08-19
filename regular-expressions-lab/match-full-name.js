function matchFullName(text) {
    let pattern = /\b([A-Z]{1}[a-z]+) [A-Z]{1}[a-z]+\b/g;
    let match = text.match(pattern);
    let names = [];
    for (let name of match) {
        names.push(name)
    }
    console.log(names.join(" "));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
)
