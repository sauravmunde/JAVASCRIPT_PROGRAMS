/*
Problem statement
Write a JavaScript program that creates a simple JavaScript program that manipulates strings using various string methods.



Input:-
Str1 : Hello
Str2 : World


Expected Output:-
Concatenated String: HelloWorld
Index of 'World': 5
*/


function concatString(str1, str2) {
    // Concatenate the two strings
    let concat = str1.concat(str2); // or use str1 + str2
    return concat;
}

function indexOfWorld(str1, str2) {
    // Concatenate the strings first
    let con = concatString(str1, str2); // Call the concatString function
    // Find the index of "World" in the concatenated string
    let indexOfworld = con.indexOf("World");
    return indexOfworld;
}

// Example input
let str1 = "Hello";
let str2 = "World";

// Get the concatenated string
let concatenatedString = concatString(str1, str2);
console.log("Concatenated String:", concatenatedString); // Output: HelloWorld

// Get the index of 'World'
let index = indexOfWorld(str1, str2);
console.log("Index of 'World':", index); // Output: 5
