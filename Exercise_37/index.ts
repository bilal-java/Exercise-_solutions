// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt(size:string="large",message:string="I love TypeScript"){
 console.log(`You have ordered ${size}-sized T-shirt with the message: ${message}`);
 
 }
 // a large shirt with the default message.(T.S will overwrite the default arguments when given custom arguments )
make_shirt();


// a medium shirt with the default message
make_shirt("Medium");

// Create a small shirt with a custom message
make_shirt("Small", "TypeScript is superset of Javascript!");