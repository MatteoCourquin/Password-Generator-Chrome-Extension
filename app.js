let generateButton = document.querySelector('#generate-button');
let passwordInsert = document.querySelector('#password-insert');
let length = 4,
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+*#&@!$%?",
  password = "";

function copyPassword() {
  navigator.clipboard.writeText(passwordInsert.textContent);
}
function shuffleChars() {
  let value = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    value += charset.charAt(Math.floor(Math.random() * n));
  }
  return value;
}
function randomPassword() {
  password = `${shuffleChars()}-${shuffleChars()}-${shuffleChars()}`;
  passwordInsert.innerHTML = password;
}

generateButton.addEventListener('click', () => { randomPassword(), copyPassword() })
passwordInsert.addEventListener('click', copyPassword)