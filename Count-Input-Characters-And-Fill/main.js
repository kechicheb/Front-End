let input = document.querySelector("input[type='text']");
let borderWidth = document.querySelector("form .borderWidth");
let number = document.querySelector("form span.number");
let nbr = 20;
input.setAttribute("maxlength", nbr);
input.onkeyup = function () {
  number.innerHTML = nbr - input.value.length;
  borderWidth.style.width = `${parseInt((100 * input.value.length) / nbr)}%`;
};
