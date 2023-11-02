"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function sandwitch(...items) {
    console.log("Sandwitch Making:");
    if (sandwitch.length == 0) {
        console.log("You have not ordered a topping");
    }
    else {
        console.log("You have ordered a sandwitch with following topping");
        for (let item of items) {
            console.log(`-${item}`);
        }
    }
    console.log("Enjoy your sandwitch\n");
}
sandwitch("lettuce", "cheese", "pepperoni");
sandwitch("beef tikka", "cheese", "celery", "red cabbage");
sandwitch()
