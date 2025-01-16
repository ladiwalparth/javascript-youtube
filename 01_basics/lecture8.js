"use strict"
// comparisons
// Clean and simple code is priority -> so the below conversions are not recommended.

console.log(null >= 0);
// comparisons convert null or string to a number and then compare.
// null == 0 gives false because it has another type of criterion for comparisson.
// undefined > 0, undefined < 0, undefined == 0 in all cases gives a false.

// for strict comparison, checks value as well as there datatypes.


console.log("2" === 2);