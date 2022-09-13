let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexArray[Math.floor(Math.random() * hexArray.length)];
  }
  let h1 = document.createElement("h1");
  h1.innerHTML = `#${color}`;
  document.body.appendChild(h1);
  document.body.style.backgroundColor =`#${color}`;


