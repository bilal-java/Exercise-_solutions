"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
let guest_List = ["Ali", "Bilal", "Qasim", "Sheroz"];
//1- Add a new line that prints a message saying that you can invite only two people for dinner.
for (let guest of guest_List) {
    console.log(`Dear ${guest}, new dinner table will not arrive in time for the dinner, and we have space for only two guests.Regards`);
}
//2- Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list
for (let i = 0; i <= 1; i++) {
    console.log(`We are sorry ${guest_List.pop()}, we cannot accomodate you for dinner`);
}
;
//3- Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(`Dear ${guest_List[0]} , You are still invited for dinner. `);
console.log(`Dear ${guest_List[1]} , You are still invited for dinner. `);
//4- Remove the last two names from your list, so you have an empty list. 
for (let i = 0; i <= 1; i++) {
    console.log(` ${guest_List.pop()}`);
}
;
//5-Print your list to make sure you actually have an empty list at the end of your program.
console.log(guest_List);
