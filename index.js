// Example - callback hell
const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch the data.", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

// callback hell
getTodos("todos/pari.json", (err, data) => {
  console.log(data);
  getTodos("todos/zahra.json", (err, data) => {
    console.log(data);
    getTodos("todos/ali.json", (err, data) => {
      console.log(data);
    });
  });
});
