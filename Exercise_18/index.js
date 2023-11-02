"use strict";
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// 1• Store the locations in a array. Make sure the array is not in alphabetical order.
// 2• Print your array in its original order.
// 3• Print your array in alphabetical order without modifying the actual list.
// 4• Show that your array is still in its original order by printing it.
// 5• Print your array in reverse alphabetical order without changing the order of the original list.
// 6• Show that your array is still in its original order by printing it again.
// 7• Reverse the order of your list. Print the array to show that its
// order has changed.
// 8• Reverse the order of your list again. Print the list to show it’s back to its original order.
// 9• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// 10• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Solution:
//1- Store the locations in a array of at least five places in the world you’d like to visit.
let five_places = ["Aagra", "Zurich", "Georgia", "Tasmania", "Belgium"];
//2- Print your array in its original order
console.log("Array in its original order:", five_places);
// 3-Print your array in alphabetical order without modifying the actual list
console.log("Array in alphabetical order:", [...five_places].sort());
// 4• Show that your array is still in its original order by printing it.
console.log("Array is still in its original order:", five_places);
// 5• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order: ", [...five_places].sort().reverse());
// 6• Show that your array is still in its original order by printing it again.
console.log("Array is still in its original order:", five_places);
// 7• Reverse the order of your list. Print the array to show that its
// order has changed.
console.log("Array order is changed:", five_places.reverse());
// 8• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Array order is back to  original:", five_places.reverse());
// 9• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Array in alphabetical order:", five_places.sort());
// array.sort(),this will change its order permanently 
// 10• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Array is sorted in reverse alphabetical order:", five_places.reverse());
