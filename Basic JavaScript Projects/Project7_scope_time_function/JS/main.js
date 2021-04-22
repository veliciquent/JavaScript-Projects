var globalX;
function breakTheGame() {
    var localX;
    document.write(local);
}
function testFunction() {
    if (new Date().getFullYear() > 2020) {
        document.getElementById("testDisplay").innerHTML = "You mean you survived 2020?!?"
    } else {        document.getElementById("testDisplay").innerHTML = "RIP"}
}

function timeTravel() {
    year = document.getElementById("Year").value;
    if (isNaN(Year))
    {
        year = parseInt(year);
    }
    if (year === 2021) {
        document.getElementById("timeTraveled").innerHTML = "Are you one of those \"optimists\"?";    
    } else if (year > 2021) {
        document.getElementById("timeTraveled").innerHTML = "So you're saying life sucks, huh?";    
    } else if (year < 2021) {
        document.getElementById("timeTraveled").innerHTML = "Isn't that the year George Washington died?";    
    } else { 
        document.getElementById("timeTraveled").innerHTML = "What the heck is a \"" + year +"\"";    
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    console.log(Time)
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}