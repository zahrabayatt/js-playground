// Example - Make HTTPRequest using Fetch API

// so far we made HTTPRequest using XMLHTTPRequest object

fetch("todos/alis.json")
  .then((response) => {
    //console.log("resolved: ", response);
    if (response.status === 200) return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    // only catches errors, if we got some kind of networking errors
    console.log("rejected: ", err);
  });
