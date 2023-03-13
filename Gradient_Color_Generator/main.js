const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");
getRandomColor = () => {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
};
const generateGradient = (isRandom = false) => {
  if (isRandom) {
    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();
  }
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`;
};

copyCode = () => {
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = "Code Copied";
  setTimeout(() => (copyBtn.innerText = "Copy Code"), 2000);
};

colorInputs.forEach((input) => {
  input.addEventListener("input", generateGradient);
});
selectMenu.addEventListener("change", generateGradient);
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);
