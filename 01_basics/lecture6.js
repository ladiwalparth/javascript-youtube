"use strict"

let score = "33"
console.log(typeof score)
console.log(typeof(score))

let converted = Number(score);
console.log(typeof(converted))

// error if score = "33abc" -> it also converts it into a number but

let temp1 = "33abc";
temp1 = Number(temp1);
console.log(typeof(temp1));
console.log(temp1);

// converts it to NaN

// "33" => converts to 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = 1;

let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn); // successfully converts

isLoggedIn = "" // conversion from boolean gives false and true if string is non empty.

// string conversion

let vari = String(any);

// for string conversion of any number.
