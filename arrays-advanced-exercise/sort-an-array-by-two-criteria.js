function sortAnArrayBy2Criteria(array) {
    let secondaryCriteria = array.sort();
    let primaryCriteria = secondaryCriteria.sort((a, b) => a.length - b.length);
    console.log(primaryCriteria.join('\n'));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])

sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])