// ES6 Tooling: these tools are only important if you're building browser application and if you're using JS in Node.js, you don't have to worry about these tools

// when we use modern javascript we need two kinds of tools:

// 1) Transpiler : it is the combination of two words (translator + compiler), basically it's a tool that we give with our modern javascript code(ES6) and it will convert our javascript code into code that all browsers can understand(ES5). Babel is an example of a very popular transpiler for modern javascript.

// 2) Bundler: a module bundler is responsible for combining all our javascript files into a single file which we called Bundle. There are many modules bundlers out there but the most popular one is webpack, so we give all our JS files to webpack and webpack will combine them into a single file and it will minify our code by getting rid of all the whitespace and comments and then it will ugly file our code which basically means it will shorten the name our identifiers like classes, functions, objects and so on. so this will reduce the size of the bundle that will serve the client
