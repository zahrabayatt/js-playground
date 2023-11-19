// we use for-in loop to iterate in properties of object or elements of array;

const person = {
  name: "Zahra",
  age: 30,
};

for (const k in person) {
  console.log(k, person[k]);
}

for (const key in person) {
  if (person.hasOwnProperty.call(person, key)) {
    const element = person[key];
    console.log(element);
  }
}

// While it is possible to iterate over an array using a 'for...in' loop,
// using the 'for...of' loop is considered a more convenient and idiomatic approach.

const colors = ["red", "blue", "green"];

for (let index in colors) {
  console.log(index, colors[index]);
}
