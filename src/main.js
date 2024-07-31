const ul = document.querySelector("ul");

// Creating Elements

const li = document.createElement("li");

// Adding Element

ul.append(li);

// Modifying the text

const firstListItem = document.querySelector(".list-items");

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

li.innerText = "X-men";

// Modifying Attributes

li.setAttribute("id", "main-heading");
li.removeAttribute("id");

const title = document.querySelector("#main-heading");

console.log(title.getAttribute("id"));

// Modifying Classes

li.classList.add("list-items");
li.classList.remove("list-items");

console.log(li.classList.contains("list-items"));
