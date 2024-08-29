let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {
      return Math.floor(Math.random() * 11)
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 5,
   move: function () {
      return Math.floor(Math.random() * 11)
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function () {
      return Math.floor(Math.random() * 11)
   }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 10,
   move: function () {
      return Math.floor(Math.random() * 11)
   }
};

let mossPiglet = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 8,
   move: function () {
      return Math.floor(Math.random() * 11)
   }
};

let crew = [superChimpOne, salamander, superChimpTwo, dog, mossPiglet];


// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.
console.log(crew)

function crewReports() {
   
   for(index = 0; index < crew[index].length; index++) {
   }
   return crew[index].length
} 
console.log(`${crew.name} is a ${crew.species}. They are ${crew.age} and ${crew.mass} kilograms. Their ID is ${crew.astronautID}.`) 

// Start an animal race!

function fitnessTest(crew) {
   let leaderboard = [], numSteps, turns;
   for(let index = 0; index < crew.length; index++) {
      numSteps = 0;
      turns = 0;
      while(numSteps < 20) {
         numSteps = numSteps + crew[index].move();
         turns++
      }
      leaderboard.push(`${crew[index].name} took ${turns} turns to take 20 steps.`)
      
   }
   return leaderboard
};
console.log(fitnessTest(crew))
