"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
// Define an array of magician names
const _magicians = ['Baba Bangali', 'Baba mozang', 'Baba kala naag'];
function show_magicians(_magicians = []) {
    for (let magician of _magicians) {
        console.log(magician);
    }
}
// Define a function called make_great that adds "the Great" to each magician's name
function make_great(_magicians) {
    for (let i = 0; i < _magicians.length; i++) {
        _magicians[i] = "The Great " + _magicians[i];
    }
}
// Call the make_great function to modify the array
make_great(_magicians);
// Call the show_magicians function to verify the changes
show_magicians(_magicians);
