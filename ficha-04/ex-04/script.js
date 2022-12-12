/* eslint
no-console: ["error", { allow: ["log", "warn", "error"] }],
no-plusplus: ["error", { "allowForLoopAfterthoughts": true }],
prefer-template: "off" */

for (let x = 0; x <= 15; x++) {
  if (x % 2 === 0) {
    console.log(x + ' is even');
  } else {
    console.log(x + ' is odd');
  }
}
