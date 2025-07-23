/*
Problem statement
You have already completed the email validation program using "||" operator. Now modify the code and rewrite the conditions to validate the email using the "&&" operator.



Additionally, include one more condition that:
a- Email should have at least 3 characters before “@.”
b- If the email is valid, store the value of the email in the result variable with a welcome message. If the email is invalid, store the string "invalid email" in the result variable.
Expected Input
 xyz@gmail.com
Expected Output
 Welcome xyz@gmail.com to our site
Expected Input
 xz@gmail.com
Expected Output
 invalid email
 */

function main(email){

    let result;

    let atindex = email.indexOf("@");

    let dotindex = email.lastIndexOf(".");

    let len = email.length;

    if (atindex >= 3 && dotindex - atindex >= 4 && len - dotindex - 1 >= 2) {

        result = "Welcome " + email + " to our site";

    } else {

        result = "invalid email";
    }
    return result;
}

// asc@gmail.com
console.log("\n");
let email = "sauravMunde@gmail.com";
console.log("email_1 = " + main(email));
console.log("\n");

email = "saurav";
console.log("email_2 = "+main(email));