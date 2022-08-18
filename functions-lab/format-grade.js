function formatGrade(grade) {   //first way

    let output = "";
    if (grade < 3) {
        output = `Fail (2)`
    } else if (grade < 3.50) {
        output = `Poor (${grade.toFixed(2)})`
    } else if (grade < 4.50) {
        output = `Good (${grade.toFixed(2)})`
    } else if (grade < 5.50) {
        output = `Very good (${grade.toFixed(2)})`
    } else {
        output = `Excellent (${grade.toFixed(2)})`
    }

    console.log(output);
}
formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)

//......................................................................

function formatGrade(grade) {   //second way

    let formattedGrade = grade.toFixed(2);
    let desc; 

    if (grade < 3) {
       formattedGrade = "2";
       desc = "Fail"
    } else if (grade < 3.50) {
       desc = "Poor"
    } else if (grade < 4.50) {
        desc = "Good"
    } else if (grade < 5.50) {
        desc = "Very good"
    } else {
        desc = "Excellent"
    }

    console.log(`${desc} (${formattedGrade})`);
}
formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)