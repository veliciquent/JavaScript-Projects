function myDictionary() {
    //Creating a Dictionary of KV pairs relating to a "Human"
    var human = {
        arms: 2,
        legs: 2,
        name: "Jim",
        disposition: "Unfazed",
        potential: NaN
    };
    //Removing the "Potential" Element
    delete human.potential;
    //Changing paragraph display to the human name
    document.getElementById("Dictionary").innerHTML = human.name;
}