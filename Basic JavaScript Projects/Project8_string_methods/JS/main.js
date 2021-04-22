// Function demonstrating the "concat" function
function publicSpeaking() {
    var part1 = "This may or may not be ";
    var part2 = "a run on sentence ";
    var part3 = "that when switched up ";
    var part4 = "may or may not make ";
    var part5 = "two dolphis squeak on a sushi platter ";
    document.getElementById("publicSpeaking").innerHTML = part1.concat(part2, part3, part4, part5);
}

// Function demonstrating Slicing
function sushiSlice(){
    var sushiThoughts = "The dolphins were beautifully murdered in a symphony of harpoons that ultimately led to their eventual metamorphosis as Sushi."
    var sushiNum1 = Math.floor(Math.random() * sushiThoughts.length);
    var sushiNum2 = Math.ceil(Math.random() * sushiThoughts.length);
    while (sushiNum1 >= sushiNum2) {
        sushiNum1 = Math.floor(Math.random() * sushiThoughts.length);
        sushiNum2 = Math.ceil(Math.random() * sushiThoughts.length);
    }
    console.log(sushiNum1, sushiNum2);
    var sushiSection = sushiThoughts.slice(sushiNum1, sushiNum2)
    // Creating an all upper-case entry
    document.getElementById("sushiSlice").innerHTML = sushiSection.toUpperCase();
    // Adding a random number with a precision of 3 decimal points
    document.getElementById("luckySlice").innerHTML = "And your lucky slice iiiiiiiiis:" + sushiThoughts.search(/beautifully/i).toString() + Math.random().toPrecision(3);
}

// Function demonstrating "valueOf" and "roFixed" within the console
function findValue() {
    var theString = new String("String Cheese:");
    console.log(theString);
    console.log(theString.valueOf() + Math.random().toFixed(5));
}