const btn = document.querySelector(".generate");
const serial = document.querySelector(".serial");
btn.addEventListener("click", () => {
  let characters =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOBQRSTUVWXYZ@/?!&\\";
  let charsCount = 15;
  let randomSerial = "";
  for (let i = 0; i < charsCount; i++) {
    randomSerial += characters[Math.floor(Math.random() * characters.length)];
  }
  serial.innerHTML = randomSerial;
});
