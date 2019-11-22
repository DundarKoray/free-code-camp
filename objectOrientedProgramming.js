console.log("--------HELLO FROM OBJECT ORIENTED PROGRAMMING----------")


//--------------------
// Create a Basic JavaScript Object


/* Question
Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.
*/

let dog = {
    name: "Tarzan",
    numLegs: 4
};

console.log(dog.name) // Tarzan
console.log(dog.numLegs) // 4

//--------------------
// Use Dot Notation to Access the Properties of an Object


/* Question
Print both properties of the dog object to your console.
*/

let dog1 = {
    name: "Spot",
    numLegs: 4
};
// Add your code below this line
console.log(dog1.name) // Spot
console.log(dog1.numLegs) // 4

//--------------------
// Create a Method on an Object


/* Question
Using the dog object, give it a method called sayLegs. The method should return the sentence "This dog has 4 legs."
*/

let dog2 = {
    name: "Spot",
    numLegs: 4,

    sayLegs() {
        console.log("This dog has " + this.numLegs + " legs.")
    }
};

dog2.sayLegs();

//--------------------
// Define a Constructor Function


/* Question
Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.
*/

function Dog() {
    this.name = "Tarzan";
    this.color = "brown";
    this.numLegs = 4;
}

let myDog1 = new Dog();
console.log(myDog1); // Dog {name: "Tarzan", color: "brown", numLegs: 4}

console.log(myDog1.name); // Tarzan

//--------------------
// Extend Constructors to Receive Arguments


/* Question
Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.
*/

function Dog1(name, color, numLegs) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog1("cici", "white");
console.log(terrier.name) // cici
console.log(terrier.color) // white
console.log(terrier.numLegs) // 4

//--------------------
// Verify an Object's Constructor with instanceof


/* Question
Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.
*/

/* jshint expr: true */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(3);
console.log(myHouse instanceof House) // true

//--------------------
// Use Prototype Properties to Reduce Duplicate Code


/* Question
Add a numLegs property to the prototype of Dog
*/


function Dog5(name) {
    this.name = name;
}



// Add your code above this line
let beagle = new Dog5("Snoopy");

Dog5.prototype.numLegs = 4;
console.log(beagle);

//--------------------
// Iterate Over All Properties


/* Question
Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
*/

function Dog4(name) {
    this.name = name;
}

Dog4.prototype.numLegs = 4;

let beagle1 = new Dog4("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line
for (let property in beagle1) {
    if (beagle1.hasOwnProperty(property)) {
        ownProps.push(property)
    } else {
        prototypeProps.push(property)
    }
}

console.log(ownProps) // ["name"]
console.log(prototypeProps) // ["numLegs"]

//--------------------
// Understand the Constructor Property


/* Question
Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
*/

function Dog(name) {
    this.name = name;
}

function Fish(name) {
    this.name = name;
}

let eel = new Fish('Skeletor')
console.log(eel.name) // Skeletor

// Add your code below this line
let kangal = new Dog("Dük")
console.log(kangal.name) // Dük

function joinDogFraternity(candidate) {
    return candidate.constructor === Dog ? true : false
}

console.log(joinDogFraternity(kangal)) // true
console.log(joinDogFraternity(eel)) // false
