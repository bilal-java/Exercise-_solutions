"use strict";
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
let fruits = ['orange', 'banana', 'pineapple'];
try {
    // Access an element with an out-of-bound index (e.g., index 10)
    let value = fruits[10];
    console.log("Value:", value);
}
catch (error) {
    console.log("Error:", error);
}
finally {
    console.log(fruits);
}
