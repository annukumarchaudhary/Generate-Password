const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

const lengthInput = document.getElementById("length");
const uppercaseChk = document.getElementById("uppercase");
const lowercaseChk = document.getElementById("lowercase");
const numbersChk = document.getElementById("numbers");
const symbolsChk = document.getElementById("symbols");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-={}[]|:;<>,.?/";

function generatePassword() {
  let chars = "";
  if (uppercaseChk.checked) chars += upperChars;
  if (lowercaseChk.checked) chars += lowerChars;
  if (numbersChk.checked) chars += numberChars;
  if (symbolsChk.checked) chars += symbolChars;

  if (!chars) return "";

  const length = parseInt(lengthInput.value);
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

generateBtn.addEventListener("click", () => {
  const password = generatePassword();
  if (!password) {
    alert("Please select at least one character type!");
    return;
  }
  passwordInput.value = password;
});

copyBtn.addEventListener("click", () => {
  if (!passwordInput.value) return;
  navigator.clipboard.writeText(passwordInput.value);
  alert("Password copied to clipboard!");
});
