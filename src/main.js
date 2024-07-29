const title = document.querySelector("#main-heading");

title.style.color = "red";

const listItems = document.querySelectorAll(".list-items");

for (let i = 0; i < listItems.length; i++) {
  const element = listItems[i];
  element.style.fontSize = "5rem";
}
