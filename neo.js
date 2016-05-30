
 
// var name = "Morpheous";

// function sayHi(name, address, age, skills) {
//   console.log("Hello " + name);
//   console.log(skills);
//   console.log(arguments);
// }


// sayHi(name, '21 Duncun', '34')



// var Car = {
//   "make": "Ford",
//   "model": "Fiesta",
//   "color": "Red"
// }

// var Car1 = {
//   "make": "Toyota",
//   "model": "Verso",
//   "color": "Silver"
// }

var colour = ["red", "blue", "green", "white", "silver", "black"];
var model = ["Civic Coupe", "Civic Sedan", "CR-Z", "Fit", "Accord Sedan", "Accord Coupe"]
var randomColour;
var randomModel;

function Colour() {
  return randomColour = colour[Math.floor(Math.random() * colour.length)];
}

function Model() {
  return randomModel = model[Math.floor(Math.random() * model.length)];
}

function Car(make, model, colour) {
  this.make = make;
  this.model = Model(randomModel);
  this.colour = Colour(randomColour)
}

function CarFactory(brand, model, colour, numberOfCars) {
  this.brand = brand;
  this.model = Model(randomModel);
  this.numberOfCars = numberOfCars;
  this.manufacturedCars = [];
  this.colour = Colour(randomColour)

  this.manufacture = function() {
    console.log("Manufactururing " + numberOfCars + " Cars")
    while (this.manufacturedCars.length < this.numberOfCars) {
      var newHondaCar = new Car('Honda', Model(randomModel), Colour(randomColour));
      this.manufacturedCars.push(newHondaCar);
    }
  }
}


var HondaFactory = new CarFactory('Honda', 'Accord', Colour(randomColour), 50)

HondaFactory.manufacture(20);

console.log(HondaFactory.manufacturedCars)


