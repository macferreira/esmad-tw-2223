function squareNumber(num) {
  let squaredNumber = num * num;
  console.log(
    'The result of squaring the number ' + num + ' is ' + squaredNumber
  );
  return squaredNumber;
}
function halfOf(num) {
  let half = num / 2;
  console.log('Half of ' + num + ' is ' + half);
  return half;
}
function percentOf(num1, num2) {
  let percent = (num1 / num2) * 100;
  console.log(num1 + ' is ' + percent + '% of ' + num2);
  return percent;
}
function areaOfCircle(radius) {
  let area = Math.PI * squareNumber(radius);
  console.log('The area of circle with radius ' + radius + ' is ' + area);
  return area;
}

let squareButton = document.getElementById('square-button');
squareButton.addEventListener('click', function (event) {
  let num = document.getElementById('square-input').value;
  document.getElementById('solution').innerHTML = squareNumber(num);
  event.preventDefault();
});

let halfButton = document.getElementById('half-button');
halfButton.addEventListener('click', function (event) {
  let num = document.getElementById('half-input').value;
  document.getElementById('solution').innerHTML = halfOf(num);
  event.preventDefault();
});

let percentButton = document.getElementById('percent-button');
percentButton.addEventListener('click', function (event) {
  let num1 = document.getElementById('percent1-input').value;
  let num2 = document.getElementById('percent2-input').value;
  document.getElementById('solution').innerHTML = percentOf(num1, num2);
  event.preventDefault();
});

let areaButton = document.getElementById('area-button');
areaButton.addEventListener('click', function (event) {
  let num = document.getElementById('area-input').value;
  document.getElementById('solution').innerHTML = areaOfCircle(num);
  event.preventDefault();
});

let clearEntryButton = document.getElementById('clear-entry-button');
clearEntryButton.addEventListener('click', function (event) {
  document.getElementById('solution').innerHTML = '';
  event.preventDefault();
});
