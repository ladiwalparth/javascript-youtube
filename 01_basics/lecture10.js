"use strict"

// Primitive datatypes occupy stack memory where always a copy is assigned
// Non Primitive datatypes occupy heap memory where reference is assigned and any changes in one will affect all the variables.

let a = 12
let b = a

++b;
console.log(a);
console.log(b);

let obj = {
    email: "ladiwalparth@gmail.com",
    pass: "hare krishna"
}

let obj2 = obj;

// we access objects inside object using . operator.
obj2.email = "parth@harekrishna"

console.table([obj,obj2])

// both gets changed.

// arrays, objects, functions are example of non primitive datatypes.