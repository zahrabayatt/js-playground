const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// Iterating through object properties using for...in
for (const key in circle) {
  console.log(key, circle[key]);
}

// Attempting to use for...of directly on the object, which will result in an error
// Object is not iterable, so use Object.keys() to obtain an iterable array of keys
// and iterate through them with for...of
for (const key of Object.keys(circle)) {
  console.log(key);
}

// Explaining that Object is a built-in constructor, and object literals are internally
// translated to Object constructor function calls
// For example: const x = { value: 1 }; translates to const x = new Object({ value: 1 });

// Iterating through object entries to access key-value pairs
// Each entry is an array where the first element is the key and the second is the value
for (const entry of Object.entries(circle)) {
  console.log(entry);
}

// Checking if the object has a specific property or method
if ("color" in circle) {
  console.log("yes color");
}
if ("radius" in circle) {
  console.log("yes radius");
}
