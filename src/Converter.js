/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  celsius = (temperature - 32)/1.8;
  return celsius.toFixed(1);
};

function convertCelsiusToFahrenheit(temperature) {
  fahrenheit = (temperature * 9/5) + 32;
  return fahrenheit.toFixed(0);
};

function convertPoundToKilogram(number) {
  kilogram = number/2.205;
  return kilogram.toFixed(3);
};

function convertKilogramToPound(number) {
  pound = number * 2.205;
  return pound.toFixed(3);
};

function convertKilogramToStone(value) {
  stone = value/6.35;
  return stone.toFixed(3)
}
