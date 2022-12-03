function showMultiplicationNumber(num = 1) {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${num} x ${i} = ${num * i}\n`;
  }
  alert(result);
}

const num = +prompt('Choose a number?');
showMultiplicationNumber(num);
