// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chai
// • If the alien is green, print a message that the player earned 5 point
// • If the alien is yellow, print a message that the player earned 10 point
// • If the alien is red, print a message that the player earned 15 point
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Solution:

//Turn your if-else chain from Exercise 5-4 into an if-else chain.
import { alien_colour } from "../Exercise_26";
// import { guestList } from "../Exercise_15/Exercise_15";

if(alien_colour=="green"){
 console.log("Player just earned 5 points.");
 }

else{
 console.log("The version that fails will have no output.");
 }

if(alien_colour!=="green"){
 console.log("player just earned 5 points.");
 }

else{
 console.log("The version that fails will have no output.");
 }

// • If the alien is green, print a message that the player earned 5 points.

if(alien_colour!=="green"){
 console.log("Player just earned 5 points.");}

//  • If the alien is yellow, print a message that the player earned 10 points.

 if(alien_colour=="yellow"){
  console.log("Player just earned 10 points.");}
 // • If the alien is red, print a message that the player earned 15 points.
 if(alien_colour=="red"){
  console.log("Player just earned 15 points.");}

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
