function calculateAverage(student1Score ,student2Score ,student3Score) {
    let score1 = +student1Score;
    let score2 = +student2Score;
    let score3 = +student3Score;
    let averageScore = (score1 + score2 + score3) /3
//Write your code here

    return averageScore;
}

let student1Score = "90"
let student2Score = "96"
let student3Score = "77"

let average = calculateAverage(student1Score , student2Score , student3Score)
console.log('The average score is =' +average)

