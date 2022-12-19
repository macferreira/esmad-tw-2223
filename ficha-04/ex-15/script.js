/* eslint
func-names: "off",
no-console: "off",
prefer-arrow-callback: "off" */

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

const squareButton = document.getElementById('square-button');
squareButton.addEventListener('click', function (event) {
  const num = document.getElementById('square-input').value;
  document.getElementById('solution').innerHTML = squareNumber(num);
  event.preventDefault();
});

const halfButton = document.getElementById('half-button');
halfButton.addEventListener('click', function (event) {
  const num = document.getElementById('half-input').value;
  document.getElementById('solution').innerHTML = halfOf(num);
  event.preventDefault();
});

const percentButton = document.getElementById('percent-button');
percentButton.addEventListener('click', function (event) {
  const num1 = document.getElementById('percent1-input').value;
  const num2 = document.getElementById('percent2-input').value;
  document.getElementById('solution').innerHTML = percentOf(num1, num2);
  event.preventDefault();
});

const areaButton = document.getElementById('area-button');
areaButton.addEventListener('click', function (event) {
  const num = document.getElementById('area-input').value;
  document.getElementById('solution').innerHTML = areaOfCircle(num);
  event.preventDefault();
});

const clearEntryButton = document.getElementById('clear-entry-button');
clearEntryButton.addEventListener('click', function (event) {
  document.getElementById('solution').innerHTML = '';
  event.preventDefault();
});
