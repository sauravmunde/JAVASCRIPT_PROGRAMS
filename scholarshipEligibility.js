
function isEligible(mathScore, englishScore, scienceScore) {
    let count = 0;

    // Check how many subjects are above 80
    if (mathScore > 80) {
        count = count + 1;
    }
    if (englishScore > 80) {
        count = count + 1;
    }
    if (scienceScore > 80) {
        count = count + 1;
    }

    // Check total score
    let total = mathScore + englishScore + scienceScore;

    // Check conditions
    if (count >= 2 || total >= 250) {
        return true;
    } else {
        return false;
    }
}

// Test the function
const englishScore = 77;
const mathScore = 84;
const scienceScore = 93;

const result = isEligible(mathScore, englishScore, scienceScore);
console.log(result);  // Output: true

