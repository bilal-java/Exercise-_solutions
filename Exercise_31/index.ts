
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
// import { usernames } from "../Exercise_30";
let usersnames:string[]=['Admin','Javed','Sohail','Ali','Jamil']

if(usersnames.length==0){
 console.log("We need to find some users!");}

 usersnames=[]
 if(usersnames.length==0){
console.log("The user list is empty now");
}
 console.log(usersnames.length);
 
 


