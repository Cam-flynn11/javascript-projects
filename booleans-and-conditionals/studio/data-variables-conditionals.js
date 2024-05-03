// Initialize Variables below
const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
const astronautCount = 7;
const astronautStatus = "ready";
const avgAstronautMassKG = 80.7;
const crewMassKG = astronautCount * avgAstronautMassKG;
const fuelMassKG = 760000;
const shuttleMassKG = 74842.31;
const totalMassKG = crewMassKG + fuelMassKG + shuttleMassKG;
const maximumMassLimit = 850000;
const fuelTempCelcius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = '100%';
const weatherStatus = "clear";
let prepareForLiftoff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log(astronautCount)
}else{
        console.log( "abort mission")
    } 

// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") { 
    console.log("ready!")
} else {
    console.log( "abort mission")
    }
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKG < maximumMassLimit) { 
    console.log(totalMassKG)
} else {
    console.log( "abort mission")
    }
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelcius >= minimumFuelTemp || fuelTempCelcius <= maximumFuelTemp) {
    console.log(fuelTempCelcius)
} else {
    console.log( "abort mission")
    }
// add logic below to verify the fuel level is at 100%
if (fuelLevel === '100%') {
    console.log("100%")
} else {
    console.log( "abort mission")
 }
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") { 
    console.log("clear")
} else {
    console.log( "abort mission")
 }
// Verify shuttle launch can proceed based on above conditions
if (prepareForLiftoff === true) {
    console.log("clear for take off")
} else {
    console.log("abort mission");
}
    

console.log(date);
console.log(time);
console.log(astronautCount);
console.log(crewMassKG);
console.log(fuelMassKG);
console.log(shuttleMassKG);
console.log(totalMassKG);
console.log(fuelTempCelcius);
console.log(weatherStatus);
