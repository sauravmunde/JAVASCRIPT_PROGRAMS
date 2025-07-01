

function checkEligibility(param1){

    if(param1 >= 18){
        console.log("granted");
    }else{
        console.log("denied");
    }
    return param1;
}

let answer = checkEligibility(18);

console.log(answer);


<!--Problem statement
Write a JavaScript function named checkEligibility that takes an integer input age and checks if the user's age meets the eligibility criteria. The function should return a string indicating whether access is "granted" or "denied" based on the following conditions:



1. If the user's age is 18 years or older, return "granted"

2. If the user's age is less than 18 years, return "denied"



Input
17
Expected Output
denied
Input
22
Expected Output
granted  -->