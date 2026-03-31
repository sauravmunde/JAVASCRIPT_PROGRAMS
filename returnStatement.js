function square(number){
   console.log(number * number);

   return number * number;
}

const sq = square(5);
console.log(sq);

/*
Problem statement
Create a JavaScript function called lastDigit that takes two numbers, num1 and num2, as arguments. The function should determine whether the last digit of both numbers is equal. If the last digits are equal, the function should return true; otherwise, it should return false.



Expected Input
num1 = 29
num2 = 19
Expected Output
true


Expected Output
num1 = 12
num2 = 24

*/

/* code above problem */


function lastDigit(num1 , num2){
    
    const lastDigit1 = num1 % 10;
    
    const lastDigit2 = num2 % 10;

    if(lastDigit1 == lastDigit2){
        
        return true;
    }else{

        return false;
    }


}

console.log(lastDigit(42, 52));


/* 

Problem statement
Develop a JavaScript function called commonDigits that accepts two positive integers, num1, and num2, as parameters. The function should determine whether the numbers have an equal number of digits or not. If they have an equal number of digits then store true in the answer else store false.



Expected Input
num1 = 78574
num2 = 78392
Expected Output
true


Expected Input
num1 = 74847;
num2 = 781;
Expected Output
false;


Test Cases
Make a function named commonDigits
Take two numbers as arguments
Count the number of digits in both the numbers
Check if both the numbers have equal numbers of digits
If they are equal return true else return false


Note
Use Math.floor when dividing the number by 10 to ensure that it returns data type number.
You can also do this question with the help of type conversion.


*/

/* this question write the answer below */



function commonDigits(num1, num2) {
    // Function to count the number of digits in a number
    function countDigits(num) {
        let count = 0;
        while (num > 0) {
            num = Math.floor(num / 10);
            count++;
        }
        
        return count;
    }
    
    // Count the digits of num1 and num2
    const digitsNum1 = countDigits(num1);
    const digitsNum2 = countDigits(num2);
    
    // Check if the number of digits are equal
    
    if (digitsNum1 === digitsNum2) {
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(commonDigits(78574, 78392)); // Expected output: true
console.log(commonDigits(74847, 781));   // Expected output: false


