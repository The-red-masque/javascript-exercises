// Both functions should be rounded to one decimal point. Ex 37.8 instead of 37.77777778
const convertToCelsius = function(fahrenheit) {
    // 32F - 32 * 5/9
    const celsius = (fahrenheit - 32) * (5/9);
    // Celsius rounded.
    const celsiusRounded = rounded = Math.round(celsius * 10) / 10
    return celsiusRounded;
};

const convertToFahrenheit = function(celsius) {
    // F = 
    const fahrenheit = (celsius * (9/5)) + 32;
    // fahrenheitRounded 
    const fahrenheitRounded = Math.round(fahrenheit * 10) / 10
    return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
