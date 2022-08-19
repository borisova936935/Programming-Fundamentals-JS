function schoolGrades(input) {
    let result = new Map();
    
    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);
        
        if (result.has(name) == false) {
            result.set(name, []);
        }
        
        let existing = result.get(name);
        
        for (let grade of grades) {
            existing.push(grade);
        }
    }
    
    let sorted = Array.from(result);
    
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [name, grades] of sorted) {
        let avg = 0;
        
        for (let grade of grades) {
            avg += grade
        }
        
        avg /= grades.length;
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])
console.log("...");
schoolGrades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'])

//................................................................

// function schoolGrades(input) {
//     let schoolGrades = new Map();
//     for (entry of input) {
//         entry = entry.split(" ");
//         let name = entry.shift();
//         let grades = entry.map(Number);
//         if (schoolGrades.has(name)) {
//             let currentGrades = schoolGrades.get(name);

//             for (let grade of grades) {
//                 currentGrades.push(grade);
//             }

//             schoolGrades.set(name, currentGrades)
//         } else {
//             schoolGrades.set(name, grades);
//         }
//     }
//     let sortedSchoolGrades = Array.from(schoolGrades.entries());
//     sortedSchoolGrades.sort((a, b) => averageSort(a, b));
//     for (let gradesEntry of sortedSchoolGrades) {
//         let studentName = gradesEntry[0];
//         let studentGrades = gradesEntry[1];
//         console.log(`${studentName}: ${studentGrades.join(", ")}`);
//     }
//     function averageSort(a, b) {
//         let sumA = 0;
//         let sumB = 0;
//         let gradesA = a[1];
//         let gradesB = b[1];
//         gradesA.forEach(ga => sumA += ga);
//         gradesB.forEach(gb => sumB += gb);
//         let averageA = sumA / gradesA.length;
//         let averageB = sumB / gradesB.length;
//         return averageA - averageB;
//     }
// }
// schoolGrades([
//     'Lilly 4 6 6 5',
//     'Tim 5 6',
//     'Tammy 2 4 3',
//     'Tim 6 6'])
// console.log("...");
//     schoolGrades([
//     'Steven 3 5 6 4',
//     'George 4 6',
//     'Tammy 2 5 3',
//     'Steven 6 3'])


