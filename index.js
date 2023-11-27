// we should not modify the built in object in JS because it is possible that if we use a library and in that library someone has also extend that to a prototype and added shuffle method but with a different implementation then we got a lot of issue in our code

// In Summery, Don't modify objects you don't own!!

Array.prototype.shuffle = function () {
  //...
};

const array = [];
array.shuffle();
