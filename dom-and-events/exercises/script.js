function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");
    let backgroundColor = "";
button.addEventListener('click', event => {
    paragraph.innerHTML = 'Houston! We have liftoff!';
});
missionAbort.addEventListener('mousein', event => {
    backgroundColor.color = "red";
});
missionAbort.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = "";
});
missionAbort.addEventListener('click', (event) => {
   let confirmation = window.confirm("Are you sre you want to abort the mission");
  
   if (confirmation === true) {
   let newStatus = document.getElementById("statusReport");

   newStatus.innerHTML = "Mission Aborted! Space shuttle returning home"
  }  
})
    // Put your code for the exercises here.
    
}

window.addEventListener("load", init);
