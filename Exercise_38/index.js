"use strict";
// 38. Cities: Write a function called describe_city(d) that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city_name, country_name = "Pakistan") {
    console.log(`${city_name} is in Pakistan`);
}
describe_city("Multan");
describe_city("Lahore");
describe_city("Madrid");
