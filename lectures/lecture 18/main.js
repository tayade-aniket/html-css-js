// Object

let car = {
    "car_name": "Mercedez Benz",
    "model": "CLA 200d",
    "price": 3000000,
    "color": ["Cherry Red", "Perl White", "Charcole Black"]
}

document.write(car.car_name + " ");
document.write(car.model + " ");
document.write(car.price + " ");
document.write(car.color + "<br><br> ");

console.table(car);


// methods
const keys = Object.keys(car);
document.write(keys + "<br><br>");

const values = Object.values(car);
document.write(values + "<br><br>");


car.price = 5000000;

document.write(car.price + "<br><br> ");


// object contructor

let bike = new Object();


bike.name = "Apache"
bike.model = "RR310 BS6"
bike.price = 310000

document.write(bike.name + " ");
document.write(bike.model + " ");
document.write(bike.price + " ");
