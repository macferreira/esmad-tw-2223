/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

window.onload = () => {
  document
    .getElementById('save-to-storage')
    .addEventListener('click', (e) => {
      e.preventDefault();
      // guardar variável com o valor do campo name
      const nome = document.getElementById('name').value;
      // guardar variável com o valor do campo phone
      const telefone = document.getElementById('phone').value;
      // guardar na chave nome, o valor telefone
      localStorage.setItem(nome, telefone);
      // escrever na div resultado 'Nome da pessoa' guardado
      document.getElementById('resultado').innerHTML = `${nome} guardado.`;
    });

  document
    .getElementById('get-from-storage')
    .addEventListener('click', (e) => {
      e.preventDefault();
      /* percorrer todos os items exsitentes no localStorage,
      e imprimir nome[telefone] para a div resultados */
      let lista = '';
      for (let i = 0; i < localStorage.length; i += 1) {
        console.log(`${localStorage.key(i)}=[${localStorage.getItem(localStorage.key(i))}]`);
        lista += `${localStorage.key(i)}=[${localStorage.getItem(localStorage.key(i))}]<br>`;
      }
      document.getElementById('resultado').innerHTML = lista;
    });
};
