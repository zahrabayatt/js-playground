// Traverse the DOM

// Parent Node Traversal

const ul = document.querySelector("ul");

console.log(ul);

console.log(ul.parentNode);
console.log(ul.parentElement);

console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

// Different between ParentElement & ParentNode

const html = document.documentElement;

console.log(html);
console.log(html.parentNode);
console.log(html.parentElement);
