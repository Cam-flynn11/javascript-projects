const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let strModified = str.slice(3).concat(str.slice(0,3));
// console.log(strModified);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The origional phrase ${str} and the modified phrase, ${strModified}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numberOfLetters = input.question("Enter the number of letters to be relocated ");

numberOfLetters = Number(numberOfLetters)
//3) Add validation to your code to deal with user inputs that are longer than the word. 
// In such cases, default to moving 3 characters. Also, the template literal should note the error.
let finalResult = '';
if (numberOfLetters > str.length) {
    finalResult = str.slice(3).concat(str.slice(0,3));
    // numberOfLetters = 3;
    console.log(`${numberOfLetters} is too many letters, try again.`);
    // console.log(strModified);
} else { 
    console.log(`Your new word is: ${finalResult}`);
    console.log(str.slice(numberOfLetters).concat(str.slice(0,numberOfLetters)));
} 
