//Run this code first and examine the error message.
//Pay close attention to any line numbers mentioned in the message - these will help locate and repair the mistake in the code.
   // the 'L' in Level was not capital in all the right places - changed that
let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}