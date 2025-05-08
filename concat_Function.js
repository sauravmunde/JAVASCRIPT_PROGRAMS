<<<<<<< HEAD
/*
Problem statement
Write a JavaScript program that 
creates a simple JavaScript program that 
manipulates strings using various string methods.



Input:-
Str1 : Hello
Str2 : World


Expected Output:-
Concatenated String: HelloWorld
Index of 'World': 5


Test Cases:-
1- The final output should be printed correctly-

a- In the function name 'concatString' use the appropriate 
string method to concatenate string 'str1' and 'str2' and
 store the result in a variable name 'concat'. 
b- In the function name 'indexOfWorld' use the 
appropriate string method to find the index of the 
string "World" from the string which is stored in a variable 
name 'con'. Store this index in the variable name 
' indexOfworld'. 


Note:
You will be given functions with inputs already
 provided as parameters (inside the parentheses of the function).
  Do not create or assign values to these inputs inside the function.


*/


function concatString(str1 , str2){
   
    let concat =str1.concat(str2);

    return concat;
    
}

  function indexOfWorld(str1 , str2) {
  
  let con = concatString(str1  , str2 ) 
  
  let indexOfworld = con.indexOf('World');

  return indexOfworld;

}

let str1 = 'Hello'

let str2 = 'World'

let con = concatString(str1 , str2);

console.log(con)

let index = indexOfWorld(str1 , str2);

console.log(index);



=======
/*
Problem statement
Write a JavaScript program that 
creates a simple JavaScript program that 
manipulates strings using various string methods.



Input:-
Str1 : Hello
Str2 : World


Expected Output:-
Concatenated String: HelloWorld
Index of 'World': 5


Test Cases:-
1- The final output should be printed correctly-

a- In the function name 'concatString' use the appropriate 
string method to concatenate string 'str1' and 'str2' and
 store the result in a variable name 'concat'. 
b- In the function name 'indexOfWorld' use the 
appropriate string method to find the index of the 
string "World" from the string which is stored in a variable 
name 'con'. Store this index in the variable name 
' indexOfworld'. 


Note:
You will be given functions with inputs already
 provided as parameters (inside the parentheses of the function).
  Do not create or assign values to these inputs inside the function.


*/


function concatString(str1 , str2){
   
    let concat =str1.concat(str2);

    return concat;
    
}

  function indexOfWorld(str1 , str2) {
  
  let con = concatString(str1  , str2 ) 
  
  let indexOfworld = con.indexOf('World');

  return indexOfworld;

}

let str1 = 'Hello'

let str2 = 'World'

let con = concatString(str1 , str2);

console.log(con)

let index = indexOfWorld(str1 , str2);

console.log(index);



>>>>>>> 6a1597a (first commit)
