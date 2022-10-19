/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

// namespacing para encapsular as funcionalidades da base de dados
const tommy = {};
tommy.indexedDB = {};

// criar atributo para guardar uma referêcia para a bd
tommy.indexedDB.db = null;
// abrir a base de dados
tommy.indexedDB.open = () => {
  // versão da bd
  const version = 3;
  // abrir a bd com nome shoppinglist
  const request = indexedDB.open('shoppinglist', version);

  // esta callback é a única que pode alterar a estrutura da base de dados
  // permitem criar "Object Stores" e criar ou remover índices
  // caso queiramos alterar a estrutura da base e dados temos que alterar a "version"
  request.onupgradeneeded = (event) => {
    const db = event.target.result;

    // uma transação do tipo "versionchange" é iniciada automaticamente
    event.target.transaction.onerror = tommy.indexedDB.onerror;

    if (db.objectStoreNames.contains('shoppingitem')) {
      db.deleteObjectStore('shoppingitem');
    }

    // Criar uma Object Store chamada "shoppingitem"
    // segundo parâmetro permite configurar opções da base de dados
    // o keyPath define a propriedade que será única e identifica inequivocamente cada item
    const objStore = db.createObjectStore('shoppingitem', {
      keyPath: 'datahora',
    });
  };

  // callback de sucesso para o pedido que fizemos
  // neste caso o onupgradeneeded
  request.onsuccess = (event) => {
    // o parametro event é o "open" que fizemos acima
    // guardar referencia para a base de dados que abrimos [!]
    tommy.indexedDB.db = event.target.result;

    // agora que abrimos a base de dados com sucesso, podemos ler o seu conteúdo
    tommy.indexedDB.getAllShoppingItems();
  };

  request.onerror = tommy.indexedDB.onerror;
};

// como adicionar items à lista
tommy.indexedDB.addItem = function (itemText) {
  // referência à base de dados
  const db = tommy.indexedDB.db;
  // indicar que vai ser feito um acesso do tipo readwrite (leitura e escrita)
  const transaction = db.transaction(['shoppingitem'], 'readwrite');
  // referência à objectStore
  const objStore = transaction.objectStore('shoppingitem');
  // datahora atual
  const now = new Date().getTime();
  // pedido do tipo "put" para introduzir um novo item
  const request = objStore.put({
    text: itemText,
    datahora: now,
  });

  // callback de sucesso ao request do tipo put que fizemos
  request.onsuccess = function (event) {
    tommy.indexedDB.getAllShoppingItems();
  };

  request.onerror = tommy.indexedDB.onerror;
};

tommy.indexedDB.getAllShoppingItems = function () {
  // limpar lista atual
  const itemsList = document.getElementById('items');
  itemsList.innerHTML = '';

  // referência local à db
  const db = tommy.indexedDB.db;
  // transação de leitura
  const transaction = db.transaction(['shoppingitem'], 'readwrite');
  // referência para a object store
  const objStore = transaction.objectStore('shoppingitem');

  // uma vez que definimos o nosso index (keyPath) como numérico
  // o lowerBound indica que queremos todos os valores acima de 0
  const keysRange = IDBKeyRange.lowerBound(0);
  // referencia ao cursor - iterador que percorrerá toda a lista
  const cursor = objStore.openCursor(keysRange);

  // callback de sucesso
  cursor.onsuccess = (event) => {
    const result = event.target.result;
    // forçar o cast para boleano e verificar se é falso
    if (!!result === false) {
      return;
    }

    // chamar função de renderização de cada item
    renderItem(result.value);
    // pedir novo item ao cursor
    result.continue();
  };
};

// apagar um item
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

// apenas para renderização
let renderItem = function renderItem(item) {
  const itemsList = document.getElementById('items');

  // criar item da lista
  const listItem = document.createElement('li');
  // criar link
  const link = document.createElement('a');
  // criar texto
  const text = document.createTextNode(item.text);

  // adicionar callback ao link para remover o item
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // o delete item recebe o keyPath por parametro
    tommy.indexedDB.deleteItem(item.datahora);
  });

  link.textContent = ' [Remover]';
  // adicionar texto do item ao li
  listItem.appendChild(text);
  // adicionar link ao li
  listItem.appendChild(link);
  // adicionar item à lista
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
