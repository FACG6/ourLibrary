const namesign = document.getElementById('namesign');
const emailsign = document.getElementById('emailsign');
const passwordsign = document.getElementById('passwordsign');
const confirmpasswordsign = document.getElementById('confirmpasswordsign');
const msgsign = document.getElementById('msgsign');
const sendsign = document.getElementById('sendsign');

sendsign.addEventListener('click', (e) => {
  e.preventDefault();
  const nameVal = namesign.value.trim();
  const emailVal = emailsign.value.trim();
  const passwordValue = passwordsign.value;
  const confirmpasswordsignval = confirmpasswordsign.value;

  if (!nameVal || !emailVal || !passwordValue || !confirmpasswordsignval) {
    msgsign.textContent = 'plz fill all fields';
  } else if (!(/^[a-zA-Z]([a-zA-Z]||[0-9])+@([a-zA-Z]||[0-9])+\.[a-zA-Z]{2,4}$/.test(emailVal))) {
    msgsign.textContent = 'Please Enter Valid Email';
  } else if (passwordValue !== confirmpasswordsignval) {
    msgsign.textContent = 'passwords dont match';
  } else {
    const userInfo = {
      name: nameVal,
      email: emailVal,
      password: passwordValue,
    };
    fetch('/adduser', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(result => result.json()).then((ress) => {
        if (ress.status) window.location = '/login';
        msgsign.textContent = 'Email Already exist';
      }).catch((error) => {
        msgsign.textContent = error;
      });
  }
});
