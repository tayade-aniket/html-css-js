// number methods

let a = 10;
let b = 3.141517;
let c = 20;
let d = 5.10;

document.write("Value of A : " + a + "<br><br>");
document.write("Value of B : " + b + "<br><br>");
document.write("Value of C : " + c + "<br><br>");
document.write("Value of D : " + d + "<br><br>");


// addition
let result = a + c;
document.write("Addition of A & C : " + result + "<br><br>");

result = b + d;
document.write("Addition of B & D : " + result + "<br><br>");


// toString()
result = a.toString() + c;
document.write("Addition of A & C : " + result + "<br><br>");

document.write(typeof(a.toString()) + "<br><br>");


// toFixed
document.write("value of B : " + b + "<br><br>");
result = b.toFixed(3);
document.write("toFixed : " + result + "<br><br>");


//toPrecision()
document.write("value of B : " + b + "<br><br>");
result = b.toPrecision(3);
document.write("toFixed : " + result + "<br><br>");


//value of
document.write("value of A : " + a.valueOf() + "<br><br>");
