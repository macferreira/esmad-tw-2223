const boxes = document.querySelectorAll('.box');

// global to store what is being dragged
let draggedElem = null;

const printMessage = function printMessage(msg) {
  document.getElementById('messages').innerHTML = `<p>${msg}</p>${
    document.getElementById('messages').innerHTML
  }`;
};

// callback for the event dragstart
const dragStartEvent = function dragStartEvent(event) {
  this.style.color = 'blue';
  // store the element being dragged
  draggedElem = this;

  event.dataTransfer.setData('text/html', this.innerHTML);
  printMessage(`dragStartEvent on ${event.target.id}!`);
};

const dragEndEvent = function dragEndEvent(event) {
  this.style.color = 'white';

  // remove classes, leave may not be called when we drop the element
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
  // needed, if not we cannot do the element drop
  event.preventDefault();
  printMessage(`dragOverEvent on ${this.getAttribute('id')}`);
};

const dragLeaveEvent = function dragLeaveEvent() {
  this.classList.remove('over');
  printMessage(`dragLeaveEvent on ${this.getAttribute('id')}`);
};

const dropEvent = function dropEvent(event) {
  event.stopPropagation();

  // verify if we are droping the element in itself
  if (draggedElem !== this) {
    draggedElem.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData('text/html');
  }

  printMessage(`dropEvent on ${this.getAttribute('id')}`);
  return false;
};

window.onload = () => {
  [].forEach.call(boxes, (box) => {
    box.addEventListener('dragstart', dragStartEvent, false);
    box.addEventListener('dragover', dragOverEvent, false);
    box.addEventListener('dragenter', dragEnterEvent, false);
    box.addEventListener('dragleave', dragLeaveEvent, false);
    box.addEventListener('dragend', dragEndEvent, false);
    box.addEventListener('drop', dropEvent, false);
  });
};
