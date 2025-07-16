fetch('books.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('book-list');
    data.books.forEach(book => {
      const div = document.createElement('div');
      div.className = 'book';
      div.innerHTML = `<h3>${book.title}</h3><p><strong>Autor:</strong> ${book.author}</p><p>${book.description}</p>`;
      container.appendChild(div);
    });
  });
