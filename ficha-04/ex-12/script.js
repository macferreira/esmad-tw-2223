// exercise a
document.getElementById('nickname').innerHTML = 'John Doe';
document.getElementById('age').innerHTML = '30';
document.getElementById('hometown').innerHTML = 'London';

// exercise b
let items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
  items[i].className = 'listitem';
}

// exercise c
let image = document.createElement('img');
image.src = 'https://placekitten.com/200/300';
document.body.appendChild(image);
