function jsStyle() {
  const textElement = document.getElementById('text');

  textElement.style.fontSize = '14pt';
  textElement.style.fontFamily = 'Comic Sans MS';
  textElement.style.color = 'green';
}

const styleButton = document.getElementById('jsstyle');
styleButton.addEventListener('click', jsStyle);
