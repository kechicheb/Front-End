const stars = document.querySelectorAll(".stars i");
stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // and remove the "active" class from any stars with a higher index
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});
