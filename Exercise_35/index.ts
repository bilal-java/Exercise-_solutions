// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!

const animals:string[]=['Cat','Dog','Rabbit']
for(const animal of animals){
  console.log(animal);
 };
// if we add console.log(animal); in a single loop output is quite confusing,and if declared outside `animal` is not detectable
for(const animal of animals){
 console.log(`A ${animal} would be a great pet.`);
 };
 console.log("These all are fluffy and cuddly animals");
 
 console.log("Any of these animals would make a great pet!");
 
