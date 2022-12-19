function outputText() {
  const outputDiv = document.getElementById('output');
  const text01 = document.getElementById('text01').value;
  const text02 = document.getElementById('text02').value;
  const text03 = document.getElementById('text03').value;
  const output = `${text01} ${text02} ${text03}`;

  outputDiv.innerHTML = output;
}

const button = document.getElementById('output-button');
button.addEventListener('click', outputText);
