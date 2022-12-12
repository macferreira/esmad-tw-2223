/* eslint
func-names: "off",
no-console: ["error", { allow: ["log", "warn", "error"] }],
no-plusplus: "off",
prefer-arrow-callback: "off" */

const form1 = document.getElementById('form1');

function getFormvalue(event) {
  for (let i = 0; i < form1.length; i++) {
    if (form1.elements[i].value !== 'Submit') {
      console.log(form1.elements[i].value);
    }
  }

  // blocks the form submission
  event.preventDefault();

  // to submit the form...
  // form1.submit()
}

form1.addEventListener('submit', function (event) {
  getFormvalue(event);
});
