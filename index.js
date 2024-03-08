// Example - Chaining promise
const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("could not fetch the data.");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

// getTodos("todos/pari.json")
//   .then((data) => {
//     console.log("promise resolved.", data);
//     getTodos("todos/ali.json").then((data) => {
//       console.log(data);
//       getTodos("todos/zahra.json").then((data) => {
//         console.log(data);
//       });
//     });
//   })
//   .catch((err) => {
//     console.log("promise rejected: ");
//   });

// Chaining promises
getTodos("todos/pari.json")
  .then((data) => {
    console.log("promise 1 resolved: ", data);
    return getTodos("todos/ali.json");
  })
  .then((data) => {
    console.log("promise 2 resolved: ", data);
    return getTodos("todos/zahra.json");
  })
  .then((data) => {
    console.log("promise 3 resolved: ", data);
  })
  .catch((err) => {
    // if we get any error form any of these promises we catch it here
    console.log("promise rejected: ");
  });
