const passwordBox = document.getElementById('password');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('length-value');
const includeChars = document.getElementById('includeChars');
const includeNums = document.getElementById('includeNums');

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}[]<>";
const numbers = "0123456789";

lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
  generatePassword();
});

function generatePassword() {
  let charset = "";
  if (includeChars.checked) charset += characters;
  if (includeNums.checked) charset += numbers;

  let password = "";
  for (let i = 0; i < lengthSlider.value; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
