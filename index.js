// Example - Promises
const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch somethings
    // if data receive:
    resolve("some data");

    //if we get error:
    // reject("some error");
  });
};

// fist argument in then fires when promise resolves and second argument in then fires when promise rejects
getSomething().then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

// better solution
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//----------------------
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

getTodos("todos/pari.json")
  .then((data) => {
    console.log("promise resolved.", data);
  })
  .catch((err) => {
    console.log("promise rejected: ", err);
  });
