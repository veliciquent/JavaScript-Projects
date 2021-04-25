// Creates "While" Loop
function Call_Loop() {
    var x = 0;
    while (x < 500) {
        x += 1;
        document.getElementById("Loop").innerHTML = x;
    }
}

//Creates "For" Loop
function for_Loop() {
    var instruments = ["oboe", "trombone", "tuba", "saxaphone", "Xylalalalalaphone"]
    var stuffs = "";
    for (i = 0; i < instruments.length; i++) {
        stuffs += instruments[i] + " sucks <br>"
    }
    document.getElementById("List_of_Instruments").innerHTML = stuffs;
}

//Creates an Array
function array_Function() {
    var words = []
    words.push("these");
    words.push("words");
    words.push("are");
    words.push("pointless");

    document.getElementById("Array").innerHTML = words[1];
}

//Creates a "constant" object
function constant_Function() {
    const consistentHuman = {eyes:2, name:"Turner", legs:2, arms:2}
    consistentHuman.stupidity = true;
    consistentHuman.name = "Dinkleburg"
    document.getElementById("Constant").innerHTML = consistentHuman.name + " " + consistentHuman.stupidity;
}

//Uses "Let" to Eat some Peanut Butter
let peanutButter = {
    consistency: "Creamy",
    fatal:true,
    Brand:"Jif",
    Ounces:5,
    Eat : function() {
        return "You've eaten " + this.Ounces + " ounces of " + this.consistency + " " + this.Brand + " Peanut Butter. <br> Deadly: " + this.fatal;
    }
}
document.getElementById("PeanutButter").innerHTML = peanutButter.Eat();