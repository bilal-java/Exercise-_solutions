
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// Solution:
// Make a list of five or more usernames called current_users.
const current_users:string[]=['Ali','Khalid','Akbar','Jalil']
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
const new_users:string[]=['Saad','Ali','Museb','Akbar']

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.


for (const new_username of new_users) {
    const isUsernameTaken = current_users.some(username => username.toLowerCase() === new_username.toLowerCase());

    if (isUsernameTaken) {
        console.log(`Sorry, ${new_username} is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations, ${new_username} is available!`);
        current_users.push(new_username); // Add the new username to current_users list
    }
}
