// seleccionar todos os elementos com a class .box
const boxes = document.querySelectorAll('.box');

// global para guadar quem está ser arrastado
let draggedElem = null;

const printMessage = function printMessage(msg) {
  document.getElementById('messages').innerHTML = `<p>${msg}</p>${
    document.getElementById('messages').innerHTML
  }`;
};

// callback a definir para o evento dragstart
const dragStartEvent = function dragStartEvent(event) {
  this.style.color = 'blue';
  // guadar o elemento que está ser arrastado
  draggedElem = this;

  // guardar os dados que queremos transferir
  event.dataTransfer.setData('text/html', this.innerHTML);
  printMessage(`dragStartEvent on ${event.target.id}!`);
};

const dragEndEvent = function dragEndEvent(event) {
  this.style.color = 'white';

  // remover as classes, uma vez que o leave pode não ser chamado, qd fazemos drop do elemento
  [].forEach.call(boxes, (box) => {
    box.classList.remove('over');
  });

  printMessage(`dragEndEvent on ${event.target.id}`);
};

const dragEnterEvent = function dragEnterEvent() {
  this.classList.add('over');
  printMessage(`dragEnterEvent on ${this.getAttribute('id')}`);
};

const dragOverEvent = function dragOverEvent(event) {
  // obrigatório, caso contrário não deixa fazer o drop
  event.preventDefault();
  printMessage(`dragOverEvent on ${this.getAttribute('id')}`);
};

const dragLeaveEvent = function dragLeaveEvent() {
  this.classList.remove('over');
  printMessage(`dragLeaveEvent on ${this.getAttribute('id')}`);
};

const dropEvent = function dropEvent(event) {
  // evita a propagação do evento do DOM
  event.stopPropagation();

  // verificar se estamos a fazer drop no próprio elemento
  if (draggedElem !== this) {
    draggedElem.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData('text/html');
  }

  printMessage(`dropEvent on ${this.getAttribute('id')}`);
  return false;
};

window.onload = () => {
  // cast do boxes (que é NodeList) para Array para usar o forEach
  [].forEach.call(boxes, (box) => {
    box.addEventListener('dragstart', dragStartEvent, false);
    box.addEventListener('dragover', dragOverEvent, false);
    box.addEventListener('dragenter', dragEnterEvent, false);
    box.addEventListener('dragleave', dragLeaveEvent, false);
    box.addEventListener('dragend', dragEndEvent, false);
    box.addEventListener('drop', dropEvent, false);
  });
};
