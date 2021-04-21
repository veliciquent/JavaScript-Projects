// Taking my time on my Ride
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "Darwinism Incoming":"Your genetics have been blessed";
    document.getElementById("Ride").innerHTML = Can_ride + ", lucky you.";
}

// Creating a constructor
function Human(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

// Instantiating the instructor, then calling a literal from it
var John = new Human("John", "Newfoundland", 32, "Blue");
function findHuman() {
  document.getElementById("New_and_This").innerHTML = John.eyeColor;

}

// Creating a nested function
function Speaking() {
  document.getElementById("Nested_Function").innerHTML = Speak();
  function Speak() {
    var thePhrase = "Toaster ovens" + theTruth();
    function theTruth() {
      return " are Gods gift to mankind."
    }
    return thePhrase;
  }
}