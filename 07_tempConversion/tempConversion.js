const convertToCelsius = function(TemperatureFahrenheit) {
  let result = (TemperatureFahrenheit - 32) * 5.0/9.0;
  result = Math.round(result * 10) / 10;
  return result;
};

const convertToFahrenheit = function(TemperatureCelcius) {
  let result = (TemperatureCelcius * 9.0/5.0) + 32;
  result = Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
