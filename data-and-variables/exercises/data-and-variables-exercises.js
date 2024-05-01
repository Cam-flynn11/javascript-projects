// Declare and assign the variables below
let nameOfShuttle ='Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let milesPerKilometer = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameOfShuttle);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKilometer);
// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
console.log(daysToMars);

// Print the results of the space mission calculations below
console.log((nameOfShuttle),"will take",(daysToMars),"days to get to Mars.");
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log(daysToMoon);

// Print the results of the trip to the moon below
console.log((nameOfShuttle),"will take",(daysToMoon),"days to get to the Moon.");
