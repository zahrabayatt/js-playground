// In JavaScript, objects are dynamic, which means that once we create them, we can edit properties or methods of objects, or add or remove properties or methods.

const circle = {
  radius: 1,
};

// Add color property
circle.color = "yellow";
// Add draw method
circle.draw = function () {
  console.log("draw");
};

// Remove color property
delete circle.color;
// Remove draw method
delete circle.draw;

console.log(circle);
