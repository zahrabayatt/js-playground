// Example - HTTP Request and status codes
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log("could not fetch the data.");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();

// Make HTTP requests to get data from another server
// We make these requests to API endpoints
// Example API endpoint: http://www.musicapi.com/artist/moby

// // what is readyState? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

// // what is status code? https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
