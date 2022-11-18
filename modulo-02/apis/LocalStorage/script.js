/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

window.onload = () => {
  document
    .getElementById('save-to-storage')
    .addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      localStorage.setItem(name, phone);
      document.getElementById('result').innerHTML = `${nome} saved.`;
    });

  document
    .getElementById('get-from-storage')
    .addEventListener('click', (e) => {
      e.preventDefault();
      /*
       * Iterate all items tha exsit in the localStorage,
       * and print name[phone] to the div results
       */
      let list = '';
      for (let i = 0; i < localStorage.length; i += 1) {
        console.log(`${localStorage.key(i)}=[${localStorage.getItem(localStorage.key(i))}]`);
        list += `${localStorage.key(i)}=[${localStorage.getItem(localStorage.key(i))}]<br>`;
      }
      document.getElementById('result').innerHTML = list;
    });
};
