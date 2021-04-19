function testFunc(j, i) {
    // Adding 2 numbers
    var x = testAdd(j, i);
    // Subtracting 2 numbers
    var y = testSubtract(j, i);
    //Multiplying numbers
    var n = testMultiply(j, i);
    //Dividing Numbers
    var p = testDivision(j, i);
    //Complex Maths
    var s = x + y + n + p;
    //Finding Remainders
    var m = testModulus(j, i);
    //Creating Negative
    var w = testNegative(s)
    //Incriments and Decriments
    var incriment = testIncriment(x);
    var decriment = testDecriment(x);
    //Finding a Random number
    var r = findRandom(i);

    // Settting paragraph elements to new values
    document.getElementById("testAdd").innerHTML = x;
    document.getElementById("testSubtract").innerHTML = y;
    document.getElementById("testMultiply").innerHTML = n;
    document.getElementById("testDivision").innerHTML = p;
    document.getElementById("Sum").innerHTML = "A whole lot of math is going on here, which equals; " + s;
    document.getElementById("testModulus").innerHTML = m;
    document.getElementById("testNegative").innerHTML = w;
    document.getElementById("testIncriment").innerHTML = incriment;
    document.getElementById("testDecriment").innerHTML = decriment;
    document.getElementById("findRandom").innerHTML = r;

}

function testAdd(x, y) {
    return x + y;
}

function testSubtract(x, y) {
    return x - y
}

function testMultiply(x, y) {
    return x * y;
}

function testDivision(x, y) {
    return x / y
}

function testModulus(x, y) {
    return x % y;
}

function testNegative(x) {
    return -x;
}

function testIncriment(x) {
    x++
    return x;
}

function testDecriment(x) {
    x--;
    return x;
}
function findRandom(x) {
    return Math.random() * x
}