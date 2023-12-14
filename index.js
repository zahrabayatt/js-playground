// Scope and function stack

// Scope
// A space or environment in which a particular variable or function can be accessed or used. Accessibility of this variable or function depends on where it is defined.

// JavaScript has the following kinds of scopes:

// Global scope: The default scope for all code running in script mode.
// Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.
// Block scope: The scope created with a pair of curly braces (a block).
// Function Stack (Call stack)
// The function stack is how the interpreter keeps track of its place in a script that calls multiple functions, like which function is currently executing and which functions within that function are being called.

// Visit the following resources to learn more:
// https://developer.mozilla.org/en-US/docs/Glossary/Call_stack
// https://developer.mozilla.org/en-US/docs/Glossary/Scope
// https://youtu.be/TkFN6e9ZDMw?si=5cGjJSCyJvOdWeXn

// 1- Recursion
// One of the most powerful and elegant concept of functions, recursion is when a function invokes itself. Such a function is called a recursive function. As recursion happens, the underlying code of the recursive function gets executed again and again until a terminating condition, called the base case, gets fulfilled. As you dive into the world of algorithms, you’ll come across recursion in many many instances.

// Visit the following resources to learn more:
// https://javascript.info/recursion
// https://javascript.info/recursion
// https://developer.mozilla.org/en-US/docs/Glossary/Recursion

// 2- Lexical scoping
// Before one can make an intuition of closures in JavaScript, it’s important to first get the hang of the term ’lexical environment’. In simple words, the lexical environment for a function f simply refers to the environment enclosing that function’s definition in the source code.

// Visit the following resources to learn more:
// https://www.codeguage.com/courses/js/functions-closures#What_is_a_lexical_environment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#lexical_scoping
// https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/
// https://youtu.be/qT5S7GgIioE?si=NBeC3yDvYxG50nMy

// 3- Closures
// Function closures are one of the most powerful, yet most misunderstood, concepts of JavaScript that are actually really simple to understand. A closure refers to a function along with its lexical environment. It is essentially what allows us to return a function A, from another function B, that remembers the local variables defined in B, even after B exits. The idea of closures is employed in nearly every other JavaScript program, hence, it’s paramount for a JavaScript developer to know it really well.

// Visit the following resources to learn more:
// https://www.codeguage.com/courses/js/functions-closures
// https://youtu.be/3a0I8ICR1Vg?si=P9Hyc5ajVi14k3hR
