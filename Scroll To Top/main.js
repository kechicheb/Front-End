const toTop = document.querySelector(".toTop");
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  scrollY >= 400 ? toTop.classList.add("show") : toTop.classList.remove("show");
});
toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
