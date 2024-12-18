let arr = ["Sameer", 26, "Male", "Cyan"];
document.write(arr + "<br><br>");

document.write(arr[0] + "<br><br>");
document.write(arr[3] + "<br><br>");

arr[1] = 30;
arr[3] = "Crimson";
document.write(arr + "<br><br>");


// length
document.write(arr.length + "<br><br>");


// New 
let arr2 = ["Apple", "Banana", "Kiwi", "Coconute", "Almonds"];
document.write(arr2 + "<br><br>");

// for
for(let i = 0; i < arr2.length; i++){
    document.write(arr2[i] + "<br><br>");
}

document.write("---------------------------------------------------------------------", "<br><br>");


let num = [20, 45, 37, 87, 99, 10];
document.write(num + "<br><br>");
document.write(typeof(num[1]) + "<br><br>");

// at
let result = num.at(1);
document.write(result + "<br><br>");

// join
result = num.join(" # ");
document.write(result + "<br><br>");

// pop
result = num.pop();
document.write(result + "<br><br>");
document.write(num + "<br><br>");

// push
result = num.push(101);
document.write(num + "<br><br>");

// shift
result = num.shift();
document.write(num + "<br><br>");

// unshift
result = num.unshift(202);
document.write(num + "<br><br>");

// delete
delete num[2];
document.write(num + "<br><br>");

// concat
result = num.concat(arr2, arr);
document.write(result + "<br><br>");
