const convertToCelsius = function(numFahr) {
  let numCels = (numFahr - 32) * (5/9); 
  numCels = parseFloat(numCels.toFixed(1)); 
  return numCels
};

const convertToFahrenheit = function(numCels) {
  let numFahr = numCels * (9/5) + 32;
  numFahr = parseFloat(numFahr.toFixed(1));
  return numFahr
};

convertToCelsius(100);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
