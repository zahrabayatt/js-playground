// In JS we don't have classes we have objects, so how we can implement inheritance only using objects?

// we define a object and put all common methods in this object and somehow we can link other objects to this object and we refer to this object as the prototype of the other object that linked to it.

// In conclusion, prototype is a objet which is essentially the parent of another object.

//So every object except the 'Object' base has a prototype or parent and it inherits all the members defined in its prototype because in JS, every objects directly or indirectly inherits from 'Object' base. the 'Object' base is the root of all objects in JS and it doesn't have a prototype or parent.

let x = {};
console.log(x);
// every object has a property called __proto__ which is deprecated and faded in console's browsers and we shouldn't directly access it and it exist to help us to trouble shout in console's browsers.

//__proto__ property is the object which is the prototype of object and it has properties and methods of the object's prototype

let y = {};
// x and y has a same instance of prototype which is "Object" base
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // true

console.log(x.toString());
// when we access a property or a method on an object JS engine first looks for that property or method on the object itself. if it can not find it then it looks at prototype for that object. agin if it can not find that member it will look at the prototype of that object all the way up to the root object which we called 'object' base.
//in conclusion we called this prototypical inheritance in action when accessing a property or a method on an object, JS engin walks up the prototype chain to find the target member.

// Remember, A prototype is just a regular object which every object has a prototype or a parent except the root object.
