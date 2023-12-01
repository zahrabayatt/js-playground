//Transpiler : it is the combination of two words (translator + compiler), basically it's a tool that we give with our modern javascript code(ES6) and it will convert our javascript code into code that all browsers can understand(ES5). Babel is an example of a very popular transpiler for modern javascript.

// NPM: it is stand for node package manger and it's a tool that comes with node.js. NPM is a tool that we use to install third party libraries and tools.

// npm init --yes : it is a command for initializing a node project, --yes is for add some default value, it creates a file called package.json which is an identification for our application. in this file we have properties like name, version, description and so on.

// after initialize a node project we ready to install Babel(https://babeljs.io):
// we should install three packages:
// @babel/cli: it is Babel's command line interface which is the tool that is run form the command line like npm. so we run it from the command line and give it the name of our javascript file and then it will convert or compile the javascript code.
// @babel/core: it is basically the core of babel where all the logic for transpiling code is implemented.
// @babel/preset-env: in Babel we have a corresponding plugin for every new JS feature starting from ES5 and newer versions so if you want to use only two of these new features, you can install only those two plugins but if you want to have more flexibility you can install this preset and this preset is basically the combination of all these plugins so it understands all the new features in JS from ES6.
// we install these packages in development dependencies so they're not going to be part of our application and deployed to the production and they are purely on the development machine.
// npm install --save - dev @babel/core @babel/cli @babel/preset-env

const x = 1;
// if we want to use Babel to convert above code to code that all browsers can understand, the first thing we need to do is to go to package.json and define a script like this:
// babel(Babble's CLI) --presets @babel/preset-env (presets we gonna use is env)  index.js --out-dir build

// if we look up in index.js in build folder we see 'use strict' added cause it added by default as a best practice. in this file also const keyword converted to var keyword cause in ES5 we don't have let or const.
