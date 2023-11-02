// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.


function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { manufacturer: string, modelName: string, options: { [key: string]: any } } {
 const carInfo = {
     manufacturer: manufacturer,
     modelName: modelName,
     options: {} as { [key: string]: any }, // Define an empty object with an index signature
 };

 for (const option of options) {
     const key = Object.keys(option)[0];
     carInfo.options[key] = option[key];
 }

 return carInfo;
}

// Call the function with required information and optional features
const car = createCar("Toyota", "Camry", { color: "blue" }, { sunroof: true });

// Print the car object
console.log(car);
