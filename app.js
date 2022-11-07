let generateButton = document.querySelector('#generate-button');
let password = document.querySelector('#password');

generateButton.addEventListener('click', () => {
  randomPassword()
})
password.addEventListener('click', copyPassword)

let length = 4,
    charset = "abcdefghijklmnopqrstuvwxyz+*#&@!$%?ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+*#&@!$%?",
    retVal = "";


function copyPassword() {
  navigator.clipboard.writeText(password.textContent)
}

  
shuffleChars = () => {
  let value = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    value += charset.charAt(Math.floor(Math.random() * n));
  }
  return value;
}
randomPassword = () => {
  console.log(shuffleChars());
  retVal = `${shuffleChars()}-${shuffleChars()}-${shuffleChars()}`;
  password.innerHTML = retVal;
}