// Traverse the DOM

// Child Node Traversal

const ul = document.querySelector("ul");

console.log(ul);

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// ul.firstChild.style.backgroundColor = "blue";
ul.childNodes[1].style.backgroundColor = "blue";
