// Functions
function addition() {
  let a = 5;
  let b = 4;
  let c;
  c = a + b;
  document.write("The Addition is : " + c + "<br>");
}

addition();
addition();

// parameterized function

function power(a,b){
    let c = a ** b;
    document.write("The Power is : " + c + "<br>");
}

power(2,3);
power(5,2);


// return function
function cube(a){
    let c = a ** 3;
    return c;
}

document.write("The cube is " + cube(10));