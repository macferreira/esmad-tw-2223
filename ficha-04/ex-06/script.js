function celsiusToFahrenheit(celsius) {
  let celsiusInF = (celsius * 9) / 5 + 32;
  console.log(celsius + '°C is ' + celsiusInF + '°F');
}

let fahrenheitToCelsius = (fahrenheit) => {
  let fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
  console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
};

fahrenheitToCelsius(20);
celsiusToFahrenheit(20);
