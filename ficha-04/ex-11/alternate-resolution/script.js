let form1 = document.getElementById('form1');
form1.addEventListener('submit', function (event) {
  getFormvalue(event);
});

function getFormvalue(event) {
  for (let i = 0; i < form1.length; i++) {
    if (form1.elements[i].value !== 'Submit') {
      console.log(form1.elements[i].value);
    }
  }

  // blocks the form submission
  event.preventDefault();

  // to submit the form...
  //form1.submit()
}
