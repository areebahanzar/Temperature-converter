//forcast today is 293 Kelvin.
const kelvin = 0;

//convert Kelvin temperature to Celcius.
const celcius = kelvin - 273;

//convert Celcius to Fahrenheit.
let fahrenheit = celcius * (9/5) + 32;

//round the number to the nearest whole number
fahrenheit = Math.floor(celcius*(9/5)+32);

//print temperature in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

//convert Celcius to Newton scale.
let newton = celcius * (33/100);

//round the number to the nearest whole number
newton = Math.floor(celcius * (33/100));

//print temperature in newton.
console.log(`The temperature is ${newton} degrees newton.`);
