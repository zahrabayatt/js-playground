const _radius = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

const c = new Circle(10);
c.draw();
// we can access to private member of Circle cause we access to _radius
console.log(_radius.get(c));
// to prevent this issue we use modules.

// Module:
// so far we have written all the code inside a one file index.js but that's not how we build real world applications because we don't want to have one gigantic file with hundreds or thousands of lines of codes. That's really hard to maintain. so we should split our code into multiple files and we call each of these files a module.

// Benefits of Modularity:
// 1) Maintainability - we can increase the maintainability of our application because our code is better organized.
// 2) Reuse - we get the chance to reuse one or more of these modules in different parts of an application or in different applications.
// 3) Abstract - we can abstract code so we can apply the abstraction principle which means we can hide some of the complexity in a module and only expose the essentials.

// Module formats:
// In ES5 we don't have the concept of modules so different solutions emerged to solve this problem. smart developers and the community introduced new syntaxes to define modules you referred to this syntaxes as module formats.

// popular module formats:
// AMD - it stands for asynchronous module definition and this is primarily used in browser applications.
// CommonJS - it is use in Node.js
// UMD - it stands for universal module definition and this can be used both in the browser and in Node.js.
// **we use these three formats in ES5 but as ES6, JS natively supports a modular format which is ES6 Modules
// ES6 Modules - Javascript native module format
