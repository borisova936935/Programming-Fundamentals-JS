function catalogue(arr){
    let object = {};
    for (let curr of arr) {
        let token = curr.split(' : ');
        let name = token[0];
        let price = token[1];
        let obj = {};
        obj[name] = price;
        object = Object.assign(object, obj);
    }
    let sortKeys = Object.keys(object);
    sortKeys.sort((a, b) => a.localeCompare(b));
    let previousLetter = sortKeys[0][0];
    let clonOfGroup = false;
    for (let key of sortKeys) {
        let price = object[key];
        let currLetter = key[0];
        if (currLetter === previousLetter) {
            if (!clonOfGroup) {
                clonOfGroup = true;
                console.log(currLetter);
            }
            console.log(`  ${key}: ${price}`);
        } else {
            console.log(currLetter);
            console.log(`  ${key}: ${price}`);
        }
        previousLetter = key[0];
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]);