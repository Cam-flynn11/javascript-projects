// // Declare and assign the variables below
// let nameOfShuttle ='Determination';
// let shuttleSpeedMph = 17500;
// let distanceToMarsKm = 225000000;
// let distanceToMoonKm = 384400;
// let milesPerKilometer = 0.621;
// // Use console.log to print the 'typeof' each variable. Print one item per line.
// console.log(typeof nameOfShuttle);
// console.log(typeof shuttleSpeedMph);
// console.log(typeof distanceToMarsKm);
// console.log(typeof distanceToMoonKm);
// console.log(typeof milesPerKilometer);
// // Calculate a space mission below
// let milesToMars = distanceToMarsKm * milesPerKilometer;
// let hoursToMars = milesToMars / shuttleSpeedMph;
// let daysToMars = hoursToMars / 24;
// console.log(daysToMars);

// // Print the results of the space mission calculations below
// console.log((nameOfShuttle),"will take",(daysToMars),"days to get to Mars.");
// // Calculate a trip to the moon below
// let milesToMoon = distanceToMoonKm * milesPerKilometer;
// let hoursToMoon = milesToMoon / shuttleSpeedMph;
// let daysToMoon = hoursToMoon / 24;
// console.log(daysToMoon);

// // Print the results of the trip to the moon below
// console.log((nameOfShuttle),"will take",(daysToMoon),"days to get to the Moon.");


// console.log(Boolean("true"));
// console.log(Boolean("TRUE"));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(''));
// console.log(Boolean('LaunchCode'));

// let num = 10;

// if (num % 2 === 0) {
//     if (num % 2 === 1) {
//         console.log("odd");
//     }
// }

// // Declare and initialize the variables for exercise 1 here:
const engineIndicatorLight = "NOT red blinking";
let fuelLevel = 21000;
let engineTemperature = 2500;
let commandOverride = true || false
let spaceSuitsOn = true;
const shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// // BEFORE running the code, predict what will be printed to the console by the following statements:
// // I predict it will say 'engines are off';

// if (engineIndicatorLight === "green") {
//    console.log("engines have started");
// } else if (engineIndicatorLight === "green blinking") {
//    console.log("engines are preparing to start");
// } else {
//    console.log("engines are off");
// }

// if (crewStatus === true) {
//   console.log("Crew Ready");
// } else {
//   console.log("Crew Not Ready");
// }
// if (computerStatusCode === 200) {
//   console.log("Please stand by. Computer is rebooting.");
// } else if (computerStatusCode === 400) {
//   console.log("Success! Computer online.");
// } else {
//   console.log("ALERT: Computer offline!");
// }
// if (shuttleSpeed > 17500) {
//   console.log("ALERT: Escape velocity reached!");
// } else if (shuttleSpeed < 8000) {
//   console.log("ALERT: Cannot maintain orbit!");
// } else {
//   console.log("Stable speed");
// }

// if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
//    console.log("all systems go");
// } else {
//    console.log("WARNING. Not ready");
// }
// if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
//    console.log("WARNING. Not ready");
// } else {
//    console.log("all systems go");
// }

// YES they will print out the same status; 

// if (fuelLevel > 20000 && engineTemperature <= 2500) {
//   console.log("Full tank. Engines good.");
// } else if (fuelLevel > 10000 && engineTemperature <= 2500) {
// console.log("Fuel level above 50%. Engines good.");
// } else if (fuelLevel > 5000 && engineTemperature <= 2500) {
//   console.log("Fuel level above 25%. Engines good.");
// } else if (fuelLevel <= 5000 || engineTemperature > 2500) {
//   console.log("Check fuel level. Engines running hot.");
// } else if (fuelLevel ,1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
//   console.log("ENGINE FAILURE IMMINENT!");
// } else {
//   console.log("Fuel and engine status pending...");
// }

// if (fuelLevel > 20000 && engineIndicatorLight === "NOT red blinking" || commandOverride === true) {
//   console.log("Cleared to launch!");
// } else {
//   console.log("Launch scrubbed!");
// }

