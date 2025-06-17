const passwordOutput = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const themeSwitch = document.getElementById("themeSwitch");
const lengthEl = document.getElementById("length");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function generatePassword() {
  let characters = "";
  if (uppercaseEl.checked) characters += upperSet;
  if (lowercaseEl.checked) characters += lowerSet;
  if (numbersEl.checked) characters += numberSet;
  if (symbolsEl.checked) characters += symbolSet;

  let password = "";
  const length = parseInt(lengthEl.value);
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * characters.length);
    password += characters[rand];
  }
  passwordOutput.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  passwordOutput.select();
  document.execCommand("copy");
});

function setTheme(mode) {
  document.body.className = mode;
  localStorage.setItem("theme", mode);
}

themeSwitch.addEventListener("change", () => {
  setTheme(themeSwitch.checked ? "light" : "dark");
});

window.onload = () => {
  const theme = localStorage.getItem("theme") || "dark";
  setTheme(theme);
  themeSwitch.checked = theme === "light";
  generatePassword();
};