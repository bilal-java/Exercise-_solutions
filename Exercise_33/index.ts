
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
// Solution:
// • Store the numbers 1 through 9 in a array.
let ord_numbers:number[]=[1,2,3,4,5,6,7,8,9]
// • Loop through the array.
for(let ord_number of ord_numbers){
 let ordinal:string
 if(ord_number===1){
  ordinal="1st";
 }
 // Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
 else if(ord_number===2){
   ordinal="2nd";
  }
  else if(ord_number===3){
   ordinal="3rd";
  }
 else{
  ordinal=`${ord_number}th`;
   }
 console.log(ordinal);
}