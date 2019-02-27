const favIco = document.querySelectorAll('.favarit');
favIco.forEach((element) => {
  element.addEventListener('click', (e) => {
    const bookId = e.target.id;
    fetch('/addfav', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({
        bookId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then((res) => {
        if (res.status) { alert('the book added'); } else { alert('the book already exist'); }
      })
      .catch(() => {
        alert('try in another time');
      });
  });
});
