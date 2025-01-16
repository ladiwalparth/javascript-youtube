// summary of datatypes for interview questions.
//  Primitive Datatypes 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// not same even if you entered the same value.

// const bigNumber = 3456543576654356754n



// Reference (Non primitive datatypes)

// Array, Objects (if you want to master javascript master objects and web events), Functions

const heros = ["shaktiman", "naagraj", "doga"];
// arrays inside a square bracket.

let myObj = {
    name: "hitesh",
    age: 22
}
console.log(myObj);
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
// function type is function only.