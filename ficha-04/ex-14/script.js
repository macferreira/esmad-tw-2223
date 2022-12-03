function outputText() {
  let outputDiv = document.getElementById('output');
  let text01 = document.getElementById('text01').value;
  let text02 = document.getElementById('text02').value;
  let text03 = document.getElementById('text03').value;
  let outputText = text01 + ' ' + text02 + ' ' + text03;

  outputDiv.innerHTML = outputText;
}

let button = document.getElementById('output-button');
button.addEventListener('click', outputText);
