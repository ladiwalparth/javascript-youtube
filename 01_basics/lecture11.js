"use strict"
const name = "hare Krishna";
const name2 = "srila prabhupada";

console.log(name + " " + name2);

// upper syntax is not prefered now a days string interpolation is used.

console.log(`hello my name is ${name2} ${name}`);

// another way to declare a string is 
const gameName = new String('AGTSP');

// you can see its properties in the console (inspect->console->declare the variable by object method->type variable name->open properties)
console.log(gameName.toUpperCase());

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));