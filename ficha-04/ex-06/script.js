/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }], prefer-template: "off" */

function celsiusToFahrenheit(celsius) {
  const celsiusInF = (celsius * 9) / 5 + 32;
  console.log(celsius + '°C is ' + celsiusInF + '°F');
}

const fahrenheitToCelsius = (fahrenheit) => {
  const fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
  console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
};

celsiusToFahrenheit(20);
fahrenheitToCelsius(20);
