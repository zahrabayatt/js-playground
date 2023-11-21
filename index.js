const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

let course = courses.find(function (course) {
  return course.name === "a";
});

// Arrow function
course = courses.find((course) => course.name === "a");

console.log(course); // {id: 1, name: 'a'}
