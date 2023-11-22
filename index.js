// The 'this' keyword refers to the object that is executing the current function.

// If a function is part of an object and is called as a method, 'this' within the method refers to that object itself. However, if the function is a standalone function (not a method), 'this' refers to the global object, which is the window object in browsers and the global object in Node.js.

// In summery:
// method => obj
// function => global (window, global)

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

video.play(); // {title: 'a', play: ƒ}
video.stop(); // {title: 'a', play: ƒ}

function playVideo() {
  console.log(this);
}

playVideo(); // window

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("a"); // Video {title: 'a} - refer to the v object

/// In a regular function, 'this' refers to the global object (like window) or the object it is called on. However, if we use the 'new' keyword when calling a function, 'this' refers to the object created by the 'new' keyword.

const video1 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this, tag); // window - because callback function that pass in forEach is a regular function so 'this' is refers to window object
    });

    // Using forEach's second argument to explicitly set 'this'
    this.tags.forEach(function () {
      console.log(this); // { title: 'a', tags: [ 'a', 'b', 'c' ], showTags: [Function: showTags] } three times - 'this' refers to the video1 object
    }, this);

    // Using arrow function to retain the lexical scope of 'this'
    this.tags.forEach((tag) => {
      console.log(this, tag); // { title: 'a', tags: [ 'a', 'b', 'c' ], showTags: [Function: showTags] } a b c - 'this' refers to the video1 object
    });
  },
};

video1.showTags();
