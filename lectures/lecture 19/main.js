// using single quotation
let str = 'This is JavaScript';
document.write(str + "<br><br>");

// using double quotation
let str2 = "Hi There";

// using template literals (backticks)
let str3 = `${str2} I'm Aniket`;
document.write(str3 + "<br><br>");

// length
document.write(str.length + "<br><br>");

// charAt
let result = str.charAt(0);
document.write("CharAt : " + result + "<br><br>");

// charCodeAt
result = str.charCodeAt(0);
document.write("CharCodeAt : " + result + "<br><br>");

// slice
result = str.slice(2,7);
document.write("Slice : " + result + "<br><br>");

// uppercase
result = str.toUpperCase()
document.write("To Upper Case : " + result + "<br><br>");

// lowercase
result = str.toLowerCase();
document.write("To Lower Case : " + result + "<br><br>");

// trim
let str4 = "      Welcome Home     ";
result = str4.trim();
document.write("Trim : " + result + "<br><br>");

// replace
result = str.replace("JavaScript", "Python");
document.write("replace : " + result + "<br><br>");

// split
result = str.split(" ");
document.write("split : " + result + "<br><br>");

