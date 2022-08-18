function bonusScoringSystem(input) {   //first way
    let studentCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());
    let students = input.map(x => Number(x));
    let maxBonus = 0;
    let maxLectures = 0;

    for (let i = 0; i < studentCount; i++) {
        let currentLectureCount = students[i];
        let currentBonus = currentLectureCount / lecturesCount * (5 + initialBonus);
        if (currentBonus > maxBonus) {
            maxBonus = currentBonus;
            maxLectures = currentLectureCount;
        }
    }
    maxBonus = Math.ceil(maxBonus);

    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${maxLectures} lectures.`);
}

bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20']);



bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18']);

//........................................................................

function bonusScoringSystem(input) {   //second way
    let studentCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());
    let students = input.map(x => Number(x));

    students = students.sort((a, b) => b - a);
    let maxLectures = students.shift();
    let maxBonus = maxLectures / lecturesCount * (5 + initialBonus);
    maxBonus = Math.ceil(maxBonus);

    if (maxBonus > 0) {
        console.log(`Max Bonus: ${maxBonus}.`);
        console.log(`The student has attended ${maxLectures} lectures.`);
    } else {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
    }
}

bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20']);



bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18']);
