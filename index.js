// When we use inheritance?

// inheritance is a great tool for solving the problem of code reuse, we have to be really careful about using it because it can make your source code complex and fragile.

// remember keep it simple and stupid.

// Start with simple objects and then if we see a number of these objects share similar features then perhaps you can encapsulate those features inside of a generic object and use inheritance. remember inheritance is not only solution for these situations, we can also use composition.

// Avoid creating inheritance hierarchs.

// Problem explanation:
// we have a parent object called Animal with two method eat and walk. we have two objects that inherit from Animal which are Dog and Person, if we want to a add another object which is Goldfish inheritance hierarch brakes cause Goldfish can not walk and it swims.

// Solution I:
// change inheritance hierarch like this:
// Animal (with eat method)
// Mammal (with walk method) | Fish (with swim method)
// Person and Dog            | Goldfish

// Solution II:
// use composition, we create three object :
// canWalk, canEat, canSwim
// each of these objects are plain JS objects with certain properties and methods
// now if we want to have a Person object, we simply compose canWalk and canEat to create a Person object and with these solution we can create GoldFish and Dog objects.
//So we don't have a hierarchy and we can come up with any combination of these objects to create new object.
// In JS, we can use 'mixins' to achieve composition.
