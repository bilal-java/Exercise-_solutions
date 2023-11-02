// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

// Solution:

let alien_colour:string="green"
// 1• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

 if(alien_colour=="green"){
  console.log("Congratulations!You  just earned 5 points for shooting the alien.");
 }
 
 if(alien_colour!=="green"){
  console.log("Congratulations!You  just earned 10 points.");
 }
// 2-• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// 


// 3• • Write one version of this program that runs the if block and another that runs the else block.
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

export{alien_colour};