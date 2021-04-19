function myDictionary() {
    var human = {
        arms: 2,
        legs: 2,
        name: "Jim",
        disposition: "Unfazed",
        potential: NaN
    };
    delete human.potential;
    document.getElementById("Dictionary").innerHTML = human.name;
}