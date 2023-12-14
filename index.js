// Labeled Statements:
// JavaScript label statements are used to prefix a label to an identifier. It can be used with break and continue statement to control the flow more precisely.

// A label is simply an identifier followed by a colon(:) that is applied to a block of code.

// Visit the following resources to learn more:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
// https://www.tutorialspoint.com/What-are-label-statements-in-JavaScript
// https://javascript.info/while-for#labels-for-break-continue

// The first for statement is labeled "loop1"
loop1: for (let i = 0; i < 3; i++) {
  // The second for statement is labeled "loop2"
  loop2: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Logs:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2
