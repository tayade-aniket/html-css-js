// function greet(){
//     alert("Welcome");
// }


// greet();


// // arrow function
// let hello = () => alert("Hi Everyone");

// hello();


// For In Loop

let arr = ["Omkar", "Rakesh", "Aasim","Uwais", "Raj"];

for(let i in arr){
    document.write(arr[i] + "<br><br>");
}

// forEach

let number = [100, 55, 69, 39, 32, 21, 10, 6];

let test =(value, index) => {
    document.write(`The Value ${value} at index ${index} <br>`);
}

number.forEach(test);

document.write("<br><br><br>")

// for of
let cars = ["BMW", "Volvo", "Mini", "Beetle", "Porche"];

for(let i of cars){
    document.write(i + "<br><br>")
}

document.write("<br><br><br>")


// Spread Operator
let num1 = [100, 45, 62, 88, 99];
let num2 = [60, 30, 90, 10];

document.write("The Num1 Array : " + num1 + "<br><br>")
document.write("The Num2 Array : " + num2 + "<br><br>")


let result = [...num1, ...num2]
document.write("The Result Array : " + result + "<br><br>")
