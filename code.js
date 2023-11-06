const passwordBox = document.querySelector("#password");
const lenght = 16;

const upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "0,1,2,3,4,5,6,7,8,9";
const symbols = "!@#$%&*()_+=|}{[]?><:;~-";
const allChars = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
