//Create an array called practiceFile with the following entry: 273.15
let practiceFile = [273.15];

//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.
let vrblTwo = '42';
let vrblThree = 'hello';

practiceFile.push(vrblTwo);
practiceFile.push(vrblThree);
console.log(practiceFile);
//Use a single .push() to add the following items: false, -4.6, and "87".  Print the array to confirm the changes.
let vrblFour = false;
let vrblFive = -4.6;
let vrblSix = '87';

practiceFile.push(vrblFour, vrblFive, vrblSix);
console.log(practiceFile);