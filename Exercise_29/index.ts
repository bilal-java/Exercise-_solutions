// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

// Solution:

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits:string[]=['Mango','Melon','Kiwi','Pineapple','Banana']
console.log(favorite_fruits);


// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

let fruitTocheck:string[]=[...favorite_fruits]
if(favorite_fruits.includes(fruitTocheck[0])){
console.log(`I really like ${fruitTocheck[0]}`);
}
if(favorite_fruits.includes(fruitTocheck[1])){
 console.log(`I really like ${fruitTocheck[1]}`);
 }
 if(favorite_fruits.includes(fruitTocheck[2])){
  console.log(`I really like ${fruitTocheck[2]}`);
  }
  if(favorite_fruits.includes(fruitTocheck[3])){
   console.log(`I really like ${fruitTocheck[3]}`);
   }
   if(favorite_fruits.includes(fruitTocheck[4])){
    console.log(`I really like ${fruitTocheck[4]}`);
    }
