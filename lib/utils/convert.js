
/**
 * kelvinToFahrenheit
 * @param {int} kelvin - temperature in kelvin
 * @param {int} digit - default:3, the number of significant digits
 * @return {int} - temperature in fahrenheit
**/
function kelvinToFahrenheit(kelvin, digit = 3) {
  return ((kelvin - 273.15) * (9/5) + 32).toFixed(digit);
}

/**
 * celsiusToFahrenheit
 * @param {int} celsius - temperature in celsius
 * @param {int} digit - default:3, the number of significant digits
 * @return {int} - temperature in fahrenheit
**/
function celsiusToFahrenheit(celsius, digit = 3) {
  return ((celsius *  (9/5)) + 32).toFixed(digit);
}

/**
 * kelvinToCelsius
 * @param {int} kelvin - temperature in kelvin
 * @param {int} digit - default:3, the number of significant digits
 * @return {int} - temperature in celsius
**/
function kelvinToCelsius(kelvin, digit = 3) {
  return (kelvin - 273.15).toFixed(digit);
}

/**
* fahrenheitToCelsius
* @param {int} fahrenheit - temperature in fahrenheit
* @param {int} digit - default:3, the number of significant digits
* @return {int} - temperature in celsius
**/
function fahrenheitToCelsius(fahrenheit, digit = 3) {
  return ((fahrenheit - 32) * (5/9)).toFixed(digit);
}

module.exports = {kelvinToFahrenheit, kelvinToCelsius, fahrenheitToCelsius, celsiusToFahrenheit};
