/* eslint no-alert: "off" */

const value = prompt('Escreva um número', 0);

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}
