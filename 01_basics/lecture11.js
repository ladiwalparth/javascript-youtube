"use strict"
const name1 = "hare Krishna";
const name2 = "srila prabhupada";

console.log(name1 + " " + name2);

// upper syntax is not prefered now a days string interpolation is used.

console.log(`hello my name is ${name2} ${name1}`);

// another way to declare a string is 
const gameName = new String('AGTSP');

// you can see its properties in the console (inspect->console->declare the variable by object method->type variable name->open properties)
console.log(gameName.toUpperCase());

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// string properties

// length

console.log(name.length)

// at

console.log([name.at(2),name.at(-1)])

// charAt

console.log(name.charAt(2))

// charCodeAt

console.log(name.charCodeAt(2))
// returns the ascii value of the character at index 2.

// concat

const str1 = "hi";
const str2 = "hi";

console.log(str1.concat(" ",str2))

// endsWith

const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("hari",2)); 

// includes

const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`);

// indexOf

const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);
// Expected output: "The index of the second "dog" is 38"

// lastIndexOf

const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = "dog";

console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);
// Expected output: "Index of the last "dog" is 38"

// padStart

let a = "4"
console.log(a.padStart(2, "0123"));
// (desired total length,padding string)
// output -> 04

// padEnd

console.log(str1.padEnd(3,"0"));
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"

// repeat

const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "


// replaceAll

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll("dog", "monkey"));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// slice

// slice(indexStart)
// slice(indexStart, indexEnd)
// Parameters
// indexStart
// The index of the first character to include in the returned substring.

// indexEnd Optional
// The index of the first character to exclude from the returned substring

// const str = "The morning is upon us.";
// str.slice(-3); // 'us.'
// str.slice(-3, -1); // 'us'
// str.slice(0, -1); // 'The morning is upon us'
// str.slice(4, -1); // 'morning is upon us'
// console.log(str.slice(-11, 16)); // "is u"
// console.log(str.slice(11, -7)); // " is u"
// console.log(str.slice(-5, -1)); // "n us"


// substr

// substr(start)
// substr(start, length)
// Parameters
// start
// The index of the first character to include in the returned substring.

// length Optional
// The number of characters to extract.

// toUpperCase

// toLowerCase

// toString

// object converts to string

//const stringObj = new String("foo");

// console.log(stringObj);
// Expected output: String { "foo" }

// console.log(stringObj.toString());
// Expected output: "foo"
