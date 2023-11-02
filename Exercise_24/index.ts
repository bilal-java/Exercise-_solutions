/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/



// Solution:


// 1• Tests for equality and inequality with strings

let name1: string = "Ali";
let name2: string = "Baber";
console.log(name1 === name2); 
console.log(name1 !== name2); 


// 2• Tests using the lower case function
let text1: string = "Hello";
let text2: string = "hello";
console.log(text1.toLowerCase() === text2); 


//3 • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 5;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2); 
console.log(num1 < num2); 
console.log(num1 >= num2); 
console.log(num1 <= num2);

// 4• Tests using "and" and "or" operators
const isSunny: boolean = true;
const isWarm: boolean = false;

console.log(isSunny && isWarm); // False (Both conditions must be true)
console.log(isSunny || isWarm); // True (At least one condition is true)

//5 • Test whether an item is in an array
const fruit1: string[] = ["apple", "banana", "cherry", "date"];
const searchfruit: string = "banana";

console.log(fruit1.includes(searchfruit)); // True

// 6• Test whether an item is not in a array
const fruit: string[] = ["apple", "banana", "cherry", "date"];
const searchFruit: string = "fig";

console.log(!fruit.includes(searchFruit)); // True (The item is not in the arrayy