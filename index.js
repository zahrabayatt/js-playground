const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

console.log(courses.includes({ id: 1, name: "a" })); // false

let course = courses.find(function (course) {
  return course.name === "a";
});

console.log(course); // {id: 1, name: 'a'}

course = courses.find(function (course) {
  return course.name === "f";
});

console.log(course); // undefined

let courseIndex = courses.findIndex(function (course) {
  return course.name === "a";
});

console.log(courseIndex); // 0

courseIndex = courses.findIndex(function (course) {
  return course.name === "f";
});

console.log(courseIndex); // -1
