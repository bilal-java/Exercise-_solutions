"use strict";
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age_years = 2;
// • If the person is less than 2 years old, print a message that the person is a baby.
if (age_years <= 2) {
    console.log("The person is a baby.");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
if (age_years <= 2 && age_years < 4) {
    console.log("The person is a toddler.");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
if (age_years <= 4 && age_years < 13) {
    console.log("The person is a kid.");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
if (age_years <= 13 && age_years < 20) {
    console.log("The person is a teenager.");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
if (age_years <= 20 && age_years < 65) {
    console.log("The person is a adult.");
}
// • If the person is age 65 or older, print a message that the person is an elder.
if (age_years <= 65 && age_years > 65) {
    console.log("The person is a toddler.");
}
