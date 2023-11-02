"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Solution:
// • Tests for equality and inequality with strings
let name1 = "Ali";
let name2 = "Baber";
console.log(name1 === name2);
console.log(name1 !== name2);
// • Tests using the lower case function
const text1 = "Hello";
const text2 = "hello";
console.log(text1.toLowerCase() === text2);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 10;
const num2 = 5;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False
// • Tests using "and" and "or" operators
const isSunny = true;
const isWarm = false;
console.log(isSunny && isWarm); // False (Both conditions must be true)
console.log(isSunny || isWarm); // True (At least one condition is true)
// • Test whether an item is in a array
const fruit1 = ["apple", "banana", "cherry", "date"];
const searchfruit = "banana";
console.log(fruit1.includes(searchfruit)); // True
// • Test whether an item is not in a array
const fruit = ["apple", "banana", "cherry", "date"];
const searchFruit = "fig";
console.log(!fruit.includes(searchFruit)); // True (The item is not in the array)
