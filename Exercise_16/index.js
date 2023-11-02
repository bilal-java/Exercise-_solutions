"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let guestList = ["Ali", "Bilal", "Qasim", "Sheroz"];
let message = "Good News!We found a bigger dinner table.";
// 1-Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
for (let guest of guestList) {
    console.log(`Hello , ${guest},${message}`);
}
// 2-Add one new guest to the beginning of your array.
let newGuest = "Hamdani Kashan";
guestList.unshift(newGuest);
console.log(guestList);
// 3-Add one new guest to the middle of your array.
let middleGuest = "Asif Ali";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, middleGuest);
console.log(guestList);
// 4-Use append() to add one new guest to the end of your list.
// Property 'append' does not exist on type 'string[]'.ts(2339) so we use push()
let new_endGuest = "Jahanzeb";
guestList.push(new_endGuest);
console.log(guestList);
//5- Print a new set of invitation messages, one for each person in your list.
for (let guest of guestList) {
    console.log(`Dear ${guest},You are invited for dinner tonight.Regards`);
}
