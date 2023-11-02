// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// Sol:
let person_name:string=" \t Muhammad Ali Jinnah \n";
console.log('Name with Whitespace :', person_name);
let strippedName= person_name.trim();
console.log("StrippedName is:" ,strippedName);
