
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

let magicians:string[]=['Baba Bangali','Baba mozang','Baba kala naag'];
function show_magiciaN(magicians:string[]=[]){
 for(let magician of magicians){console.log(`${magician}`);
 }
}
show_magiciaN(magicians);