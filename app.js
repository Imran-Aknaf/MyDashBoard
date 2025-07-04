const leftContainer = document.getElementById("left-container");
const rightContainer = document.getElementById("right-container");

for (let i=0; i < 24; i++){

    //Format into HH:MM
    const hour = i < 10 ?  `0${i}` : `${i}`;
    const timeLabel = `${hour}:00`;

    //Left container 
    const timeDiv = document.createElement("div"); 
    timeDiv.className = "time-label";
    timeDiv.textContent = timeLabel;
    leftContainer.appendChild(timeDiv);

    //Right container
    const blockDiv = document.createElement("div");
    blockDiv.className = "hour-block";
    rightContainer.appendChild(blockDiv);
}
