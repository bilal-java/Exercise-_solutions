"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
// Define an array of magician names
const magicianNames = ["JK Rowling", "Harry Potter", "Samree", "Muller Philip", "Angelina Barber"];
// Define a function called show_magicians that takes an array of names and prints them
function show_magicians(magicianNames) {
    for (const name of magicianNames) {
        console.log(name);
    }
}
// Define a function called make_great that adds "the Great" to each magician's name
function make_great(magicianNames) {
    const greatMagicians = [];
    for (const name of magicianNames) {
        greatMagicians.push("the Great " + name);
    }
    return greatMagicians;
}
// Call make_great with a copy of the array to create a new array
const greatMagicians = make_great([...magicianNames]);
// Call show_magicians with the original and new arrays to show the differences
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nGreat Magicians:");
show_magicians(magicianNames);
