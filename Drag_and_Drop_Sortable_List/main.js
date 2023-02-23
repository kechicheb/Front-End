const list = document.querySelector(".list");
const items = list.querySelectorAll(".item");
console.log(items);
items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => item.classList.add("dragging"), 0);
  
  });
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});
const initSortableList = (e) => {
    e.preventDefault();
  const draggingItem = list.querySelector(".dragging");

  const siblings = [...list.querySelectorAll(".item:not(.dragging)")];
  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });
  list.insertBefore(draggingItem, nextSibling);
};
list.addEventListener("dragover", initSortableList);
list.addEventListener("dragenter", (e) => e.preventDefault());
