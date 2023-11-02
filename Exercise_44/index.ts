// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.

function makeSandwich(...items: string[]): void {
 console.log("Sandwich Summary:");
 if (items.length === 0) {
     console.log("You ordered an empty sandwich. Please add some items.");
 } else {
     console.log("You ordered a sandwich with the following items:");
     for (const item of items) {
         console.log(`- ${item}`);
     }
 }
 console.log("Enjoy your sandwich!\n");
}

// Call the function three times with different numbers of arguments
makeSandwich( "Cheese", "Lettuce");
makeSandwich("Turkey", "Tomato");
makeSandwich("beef","pepperoni","tuna");



