function convertObject(objAsString) {
    let obj = JSON.parse(objAsString);
    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }
}
convertObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')