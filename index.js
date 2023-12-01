// for import modules in ES6 modules we use this syntax:
// in this syntax path is related path to this target module.
// note that we don't need to add the extension .js in circle.js because thats assumed by default.
// import { Circle } from "./circle";

// we got the syntax error which says 'Cannot use import statement outside a module', there is a proper way to fix this issue using a webpack but for now we use a quick workaround that we shouldn't use in production and it is just for demo.
// workaround: we add type=module to script of index.js in index.html and we also should specify a path of file with extension
import { Circle } from "./circle.js";

const c = new Circle(10);
c.draw();
