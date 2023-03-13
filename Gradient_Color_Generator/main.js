const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
refreshBtn = document.querySelector(".refresh");
getRandomColor = () => {
  const randomHex = Math.floor(Math.random * 0xffffff).toString(16);
  return `#${randomHex}`;
};
const generateGradient = () => {
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`;
};
colorInputs.forEach((input) => {
  input.addEventListener("input", generateGradient);
});
selectMenu.addEventListener("change", generateGradient);
