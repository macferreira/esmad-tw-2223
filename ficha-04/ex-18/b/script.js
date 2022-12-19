/* eslint
no-console: "off",
no-plusplus: "off"
*/

const n = 10;
let checkPrime;

for (let i = 2; i <= n; i++) {
  checkPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      checkPrime = false;
      break;
    }
  }

  if (checkPrime) {
    console.log(i);
  }
}
