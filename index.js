// Example - Throwing Errors in Async functions
const getTodos = async () => {
  const response = await fetch("todos/alis.json");
  if (response.status != 200) {
    throw new Error("cannot fetch the data!");
  }
  const data = await response.json();

  return data;
};

console.log(1);
console.log(2);

// non-blocking
getTodos()
  .then((data) => console.log("resolved: ", data))
  .catch((err) => console.log("rejected: ", err.message));

console.log(3);
console.log(4);
