function testFunc(j, i) {
    var x = testAdd(j, i);
    var y = testSubtract(j, i);
    var n = testMultiply(j, i);
    var p = testDivision(j, i);
    var s = x + y + n + p;
    var m = testModulus(j, i);
    var w = testNegative(s)
    var incriment = testIncriment(x);
    var decriment = testDecriment(x);
    var r = findRandom(i);

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