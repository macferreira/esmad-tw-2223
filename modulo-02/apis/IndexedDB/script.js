/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

const tommy = {};
tommy.indexedDB = {};
tommy.indexedDB.db = null;

tommy.indexedDB.open = () => {
  const version = 3;
  const request = indexedDB.open('shoppinglist', version);

  /*
   * This callback is the only one that can change the database structure
   * Allows to create "Object Stores", and the creation and removal of indexes.
   * If we want to change the structure we need to change the "version"
  */
  request.onupgradeneeded = (event) => {
    const db = event.target.result;

    // "versionchange" type transaction is automatically initiated
    event.target.transaction.onerror = tommy.indexedDB.onerror;

    if (db.objectStoreNames.contains('shoppingitem')) {
      db.deleteObjectStore('shoppingitem');
    }

    /*
     * Create an Object Store "shoppingitem"
     * Second parameter allows the configuration of database options
     * keyPath defines the unique property that identifies each item
     */
    const objStore = db.createObjectStore('shoppingitem', {
      keyPath: 'dateTimeId',
    });
  };

  // Read all items from the database
  request.onsuccess = (event) => {
    tommy.indexedDB.db = event.target.result;
    tommy.indexedDB.getAllShoppingItems();
  };

  request.onerror = tommy.indexedDB.onerror;
};

// Add items
tommy.indexedDB.addItem = function (itemText) {
  const db = tommy.indexedDB.db;
  // Type of access to the database is read and write
  const transaction = db.transaction(['shoppingitem'], 'readwrite');
  const objStore = transaction.objectStore('shoppingitem');
  const now = new Date().getTime();
  // Add a new item
  const request = objStore.put({
    text: itemText,
    dateTimeId: now,
  });

  // On put success we get all items
  request.onsuccess = () => {
    tommy.indexedDB.getAllShoppingItems();
  };

  request.onerror = tommy.indexedDB.onerror;
};

// Rendering
const renderItem = function renderItem(item) {
  const itemsList = document.getElementById('items');

  // create HTML for list item
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  const text = document.createTextNode(item.text);

  // add event listener to remove the item
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // delete item through the keyPath as a parameter
    tommy.indexedDB.deleteItem(item.dateTimeId);
  });

  link.textContent = ' [Remover]';
  // Add item text to the HTML
  listItem.appendChild(text);
  listItem.appendChild(link);
  itemsList.appendChild(listItem);
};

window.onload = function () {
  tommy.indexedDB.open();

  document
    .getElementById('add-item')
    .addEventListener('click', () => {
      const text = document.getElementById('new-item').value;
      tommy.indexedDB.addItem(text);
    });
};

tommy.indexedDB.getAllShoppingItems = () => {
  // empty actual list
  const itemsList = document.getElementById('items');
  itemsList.innerHTML = '';

  const db = tommy.indexedDB.db;

  const transaction = db.transaction(['shoppingitem'], 'readwrite');

  const objStore = transaction.objectStore('shoppingitem');

  // Index (keyPath) is a number, we wnat all greater than zero.
  const keysRange = IDBKeyRange.lowerBound(0);
  // List cursor to iterate values
  const cursor = objStore.openCursor(keysRange);

  cursor.onsuccess = (event) => {
    const result = event.target.result;
    if (!!result === false) {
      return;
    }

    renderItem(result.value);
    result.continue();
  };
};

// Delete an item
tommy.indexedDB.deleteItem = function (id) {
  const db = tommy.indexedDB.db;
  const transaction = db.transaction(['shoppingitem'], 'readwrite');
  const objStore = transaction.objectStore('shoppingitem');

  const request = objStore.delete(id);

  request.onsuccess = () => {
    tommy.indexedDB.getAllShoppingItems();
  };

  request.onerror = tommy.indexedDB.onerror;
};

// error logging
tommy.indexedDB.onerror = (error) => {
  console.log(error);
};
