// farenheit to celsius
const convertToCelsius = function(farenheit) {
  return Math.round((farenheit - 32) * (5 / 9) * 10) / 10;
};

// celsius to farenheit
const convertToFahrenheit = function(celsius) {
  return Math.round((celsius * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
