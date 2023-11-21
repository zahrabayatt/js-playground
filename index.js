{
  // local scope
  const message = "hi";
}

const me = "Global";

function start() {
  console.log(me); // avoid this and this is bad practice don't share global variables
  // local scope
  let message = "hello";
  const color = "blue";

  if (true) {
    const color = "yellow";
    const another = "bye";
    message = "hi";
    console.log(color, another, message); // yellow bye hi
  }

  //console.log(another); // error
  console.log(message, color); // hi blue
}

start();

// global scope

// const color = "red";
// const color = "green";

//console.log(message); // error
