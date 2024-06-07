// Code your orbitCircumference function here:
const radiuskm = 2000;
const orbitalSpeedkmhr = 28000;

function orbitCircumference (radius) {
  let circumference = 2*Math.PI*radius;
  return Math.round(circumference);
  
}
// console.log(orbitCircumference())
// Code your missionDuration function here:
let numOfOrbits = 3;
let distance = orbitCircumference(radiuskm) * numOfOrbits;

function missionDuration (distance, orbitalSpeed) {
  let time = distance / orbitalSpeed;
return Math.round(time * 100) / 100;
}
console.log(`The mission will travel ${distance} km around the planet, and it will take ${missionDuration(distance, orbitalSpeedkmhr)} hours to complete.`);
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(idNumbers){
  const index = Math.floor(Math.random() * idNumbers.length)
  return idNumbers[index];
};

// Code your oxygenExpended function here:
function oxygenExpended(candidate) {
let hours = missionDuration(distance, orbitalSpeedkmhr);
let o2Used = Math.round(candidate.o2Used(hours) * 1000) / 1000;
return `${candidate.name} will perform the spacewalk, which will last ${hours} and require ${o2Used} kg of exygen.`;
}


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 console.log(oxygenExpended(selectRandomEntry(crew)));