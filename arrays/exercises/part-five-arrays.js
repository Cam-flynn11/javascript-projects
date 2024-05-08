let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
// str = str.split();
// str = str.split('e');
// str = str.split(' ');
// str = str.split('');
// console.log(str);
    // the character inside of the () is where the string will split

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
// arr = arr.join();
// arr = arr.join('a');
// arr = arr.join(' ');
// arr = arr.join('');
// console.log(arr);
    // the character inside of the () is what joins the string together. i.e: 'a' joined the string together with the letter 'a', returning Banana5
        

//3) Do split or join change the original string/array?
    // Split does not change the original array/string, but join does.
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

console.log(cargoHold.split(',').sort().join());
