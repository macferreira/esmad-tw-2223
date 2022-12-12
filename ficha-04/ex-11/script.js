/* eslint
no-console: ["error", { allow: ["log", "warn", "error"] }],
no-plusplus: "off",
no-unused-vars: "off" */

function getFormvalue() {
  const x = document.getElementById('form1');

  for (let i = 0; i < x.length; i++) {
    if (x.elements[i].value !== 'Submit') {
      console.log(x.elements[i].value);
    }
  }

  return false;
}
