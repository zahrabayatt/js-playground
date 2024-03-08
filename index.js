// Example - Async & Await

// This feature allows us to chain promises more cleaner and readable.

// old solution
// fetch("todos/ali.json")
//   .then((response) => {
//     if (response.status === 200) return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected: ", err);
//   });

// better solution
const getTodos = async () => {
  const response = await fetch("todos/ali.json");
  //console.log(response);
  const data = await response.json();
  //console.log(data);
  return data;
};

const test = getTodos();
console.log(test); // test is a promise because async functions always return promise.

console.log(1);
console.log(2);

// non-blocking
getTodos()
  .then((data) => console.log("resolved: ", data))
  .catch((err) => console.log("rejected: ", err));

console.log(3);
console.log(4);
