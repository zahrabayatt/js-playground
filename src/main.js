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
