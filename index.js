const numbers = [1, 2, 3];

// const joined = numbers.join('');

// const joined = numbers.join(',');

const joined = numbers.join();

console.log(joined);

// Example - useful for urls
const message = "This is my first message.";

const parts = message.split(" ");
console.log(parts);

const combined = parts.join("_");
console.log(combined);
