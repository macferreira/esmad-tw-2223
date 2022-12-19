/* eslint
func-names: "off",
no-console: "off",
no-plusplus: "off",
prefer-arrow-callback: "off"
*/

function updateTotal() {
  let total = 0;
  const lines = document.querySelectorAll('table tr');
  for (let i = 0; i < lines.length; i++) {
    console.log(lines[i]);
    const input = lines[i].getElementsByTagName('input')[0];
    if (input != null) total += Number(input.value);
  }
  const span = document.getElementById('total');
  span.innerHTML = total;
}

const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', function (event) {
  const line = document.createElement('tr');

  const description = document.querySelector('form input[name=description]').value;
  const quantity = document.querySelector('form input[name=quantity]').value;

  line.innerHTML = `<tr><td>${description}</td><td><input value="${quantity}"></td><td><input type="button" value="Remove"><td></tr>`;

  const table = document.getElementById('products');
  table.append(line);

  const input = line.getElementsByTagName('input')[0];
  input.addEventListener('change', updateTotal);

  const remove = line.querySelector('input[type=button]');

  remove.addEventListener('click', function () {
    this.parentNode.parentNode.remove();
    updateTotal();
  });

  updateTotal();
  event.preventDefault();
});
