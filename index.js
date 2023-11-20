const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// Old approach for cloning an object
const another = {};

for (const key in circle) {
  another[key] = circle[key];
}

console.log(another);

// Another approach for cloning an object using Object.assign()
const thirdCircle = Object.assign({}, circle);
// const thirdCircle = Object.assign({color: 'red'}, circle); // We can use a non-empty object for assignment
console.log(thirdCircle);

// Best approach for cloning an object using the spread operator
const finalCircle = { ...circle };
console.log(finalCircle);
