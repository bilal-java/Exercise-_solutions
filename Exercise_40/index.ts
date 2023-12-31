
// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.



// Define the function make_album() that takes artist name, album title, and optional number of tracks as parameters
function make_album(artist: string, title: string, tracks?: number):
 { artist: string, title: string, tracks?: number } {
 const album: { artist: string, title: string, tracks?: number } = {
     artist: artist,
     title: title,
     
 };
 // If tracks parameter is provided, add it to the album object
 if (tracks !== undefined) {album.tracks = tracks;}
return album;
}

// Create albums using the make_album() function
const album1 = make_album("Sahir", "Pakistan 1", 10);
const album2 = make_album("Atif Aslam", "Tajdar e haram",4);
const album3 = make_album("Rahat Fateh Ali Khan", "Zaroori tha", 15);

// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
