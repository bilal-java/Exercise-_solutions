"use strict";
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let fav_transport = [];
fav_transport.push(["Car", "Honda"]);
fav_transport.push(["Motorcycle", "Jimmy"]);
fav_transport.push(["Jeep", "Sportage"]);
fav_transport.forEach(([transport, brand]) => {
    console.log(`I would like to own a ${brand} ${transport}`);
});
