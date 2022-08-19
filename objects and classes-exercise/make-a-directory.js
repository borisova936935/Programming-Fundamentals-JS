function solve(data) {
    function output(arr) {
        let r = '';
        arr.forEach(x => r += `Term: ${x[0]} => Definition: ${x[1]}\n`);
        return r;
    }
    function objectGenerator(element, agg) {
        let currO = JSON.parse(element);
        let [k, v] = Object.entries(currO)[0];
        agg[k] = v;
    }
    const sortKeys = (a, b) => a[0].localeCompare(b[0]);
 
    let arr = Object.entries(
        data.reduce((agg, element) => {
            objectGenerator(element, agg);
            return agg;
        }, {})
    ).sort(sortKeys);
 
    return output(arr);
}
makeADirectory([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);
makeADirectory([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ]);