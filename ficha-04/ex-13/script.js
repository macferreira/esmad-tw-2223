/* eslint
no-plusplus: "off",
prefer-template: "off" */

const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
];

for (let i = 0; i < books.length; i++) {
  const bookP = document.createElement('p');
  const bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);

  bookP.appendChild(bookDescription);
  document.body.appendChild(bookP);
}
