const send = document.getElementById('send');
const email = document.getElementById('email');
const password = document.getElementById('password');
const msg = document.getElementById('msg');
send.addEventListener('click', (e) => {
  const emailVal = email.value.trim();
  const passwordValue = password.value;
  e.preventDefault();
  if (!(emailVal) || !(passwordValue)) {
    msg.textContent = 'Please fill all field';
    return '';
  }
  fetch('/check', {
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify({
      emailVal,
      passwordValue,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((res) => {
      if (res.msg === 'done') {
        window.location.href = '/home';
      }
      msg.textContent = res.msg;
    });
});
