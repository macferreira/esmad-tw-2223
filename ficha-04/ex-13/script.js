let books = [
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
  let bookP = document.createElement('p');
  let bookDescription = document.createTextNode(
    books[i].title + ' by ' + books[i].author
  );

  bookP.appendChild(bookDescription);
  document.body.appendChild(bookP);
}
