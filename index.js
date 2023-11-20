// string : built-in object in JS
// more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// String primitive
const message = "hi";
// when we use dot notation with string primitive JS engine eternally wraps this with string object and we can work with string primitive like string object

// String object
const another = new String("hi");

console.log(typeof message, typeof another); // string object

// some method and property of string object
console.log(message.length);
console.log(message[0]);
console.log(message.includes("my"));
console.log(message.startsWith("i"));
console.log(message.endsWith("h"));
console.log(message.indexOf("h"));
console.log(message.replace("hi", "bye")); // return new string and don't modify given sting
console.log(message.toUpperCase());
console.log(message.trim());
message.split(" ");

// Escape notation:
const m = "This is my \n 'first' message ";
