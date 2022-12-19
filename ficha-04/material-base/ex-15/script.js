/* eslint no-console: "off" */

function squareNumber(num) {
  const squaredNumber = num * num;
  console.log(`The result of squaring the number ${num} is ${squaredNumber}`);
  return squaredNumber;
}
function halfOf(num) {
  const half = num / 2;
  console.log(`Half of ${num} is ${half}`);
  return half;
}
function percentOf(num1, num2) {
  const percent = (num1 / num2) * 100;
  console.log(`${num1} is ${percent}% of ${num2}`);
  return percent;
}
function areaOfCircle(radius) {
  const area = Math.PI * squareNumber(radius);
  console.log(`The area of circle with radius ${radius} is ${area}`);
  return area;
}
