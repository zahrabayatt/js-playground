// CommonJS: it is module format that is used in Node.js.
// there is a basic rule of thumb about modularity: Things that are highly related should go together. this is what we called Cohesion in software engineering.
// in this example _radius and Circle class are highly related so we can move them outside of this index.js and put them in a separate file called circle.js.

// in the top the file we import the modules in CommonJS format that we want like this:
// we use require function to import modules and it is part of CommonJS format.
// we pass a related path to this target module use to require function.
// note that we don't need to add the extension .js in circle.js because thats assumed by default.
// require function returned what is returned from given module.
const Circle = require("./circle");
// const { Square, Shape } = require("./circle");

const c = new Circle(10);
c.draw();
