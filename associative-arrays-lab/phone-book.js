function phoneBook(input) {
    let assocArr = {};
    for (let entry of input) {
        entry = entry.split(" ");
        assocArr[entry[0]] = entry[1];
    }
    for (let assocKey in assocArr){
        console.log(`${assocKey} -> ${assocArr[assocKey]}`);
    }
}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])
phoneBook([
    'George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'])
