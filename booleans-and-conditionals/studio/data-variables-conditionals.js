// Initialize Variables below
const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
let astronautCount = 11;
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
const prepareForLiftoff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
// add logic below to verify all astronauts are ready
    if (astronautStatus === "ready") { 
// add logic below to verify the total mass does not exceed the maximum limit of 850000
        if (totalMassKG < maximumMassLimit) {
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
            if (fuelTempCelcius >= minimumFuelTemp || fuelTempCelcius <= maximumFuelTemp) {
// add logic below to verify the fuel level is at 100%
                if (fuelLevel === '100%') {
// add logic below to verify the weather status is clear
                    if (weatherStatus === "clear") {
// Verify shuttle launch can proceed based on above conditions
                        if (prepareForLiftoff === true) {
                         console.log("Have a safe trip astronauts!");
                        }
                    }
                }
            }
        }
    }
} else {
    console.log("Abort Mission!");
}