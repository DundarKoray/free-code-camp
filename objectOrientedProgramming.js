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
