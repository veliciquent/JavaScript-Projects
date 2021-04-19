function testFunction() {
    // Type Of operator
    document.getElementById("testFunction").innerHTML = typeof "Malnutrition" + 3;
    // NaN example
    document.getElementById("testFunction2").innerHTML = 0/0;
    //NaN Operator
    document.getElementById("testFunction3").innerHTML = isNaN("Malfeasance");
    document.getElementById("testFunction4").innerHTML = isNaN("24");
    // Infinity and -Infinity
    document.getElementById("testFunction5").innerHTML = 3E309;
    document.getElementById("testFunction6").innerHTML = -3E308;
    //Boolean Operators
    document.getElementById("testFunction7").innerHTML = 3 > 5;
    document.getElementById("testFunction8").innerHTML = 3 === 3;
    document.getElementById("testFunction9").innerHTML = "Malformity" === 3;
    document.getElementById("testFunction10").innerHTML = 3 === "3";
    document.getElementById("testFunction11").innerHTML = 3 === 5;
    document.getElementById("testFunction12").innerHTML = (3 == 3) || (5 < 2);
    document.getElementById("testFunction13").innerHTML = (3 == 3) && (5 < 2);

    console.log("Malappropriated" + (2 + 2));
    console.log( 3 != (15 / 5));
}