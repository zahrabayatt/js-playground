const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    // Using 'self' to store a reference to 'this' is a common practice, but it can be improved with modern JavaScript features.

    // Approach 1: Using 'self'
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag); // 'self' refers to 'this' in showTags, which points to the 'video' object. this is a bad practice.
    });

    // Approach 2: Using 'bind'
    this.tags.forEach(
      function (tag) {
        console.log(this, tag); // 'this' refers to video object
      }.bind(this)
    );

    // Approach 3: Using arrow function
    this.tags.forEach((tag) => console.log(this, tag));
    // Arrow functions inherit 'this' from the enclosing function, solving the context issue. It is a recommended modern approach.
  },
};

video.showTags();

// Functions are objects, which means we can add built-in properties using dot notation, just like any other object.

function playVideo(a, b) {
  console.log(this, a, b);
}

playVideo.call({ name: "Mosh" }, 1, 2); // {name: 'Mosh'} 1 2 - 'call' sets 'this' to the provided object and passes additional arguments individually and call the function.

playVideo.apply({ name: "Zahra" }, [1, 2]); // {name: 'Zahra' } 1 2 - 'apply' sets 'this' and passes additional arguments as an array and call the function.

// playVideo.bind({ name: "Sara" })(); // {name: 'Sara'}
// OR
const fn = playVideo.bind({ name: "Sara" }); // 'bind' returns a new function with 'this' set to the provided object and don't call the function.
fn(); // {name: 'Sara} undefined undefined

playVideo(); // 'this' refers to the global object (e.g., 'window' in a browser)
