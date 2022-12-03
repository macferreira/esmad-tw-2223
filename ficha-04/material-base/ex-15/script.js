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
