# Scope in JavaScript

* Scope in JavaScript is the region of a program where a variable or function is accessible. JavaScript has two types of scope:

![Scope in JS](https://miro.medium.com/v2/resize:fit:1400/1*naPPWUJjDMmKXZzsWopOqQ.jpeg "Scope in JS")

## Global scope

* Variables and functions declared in the global scope are accessible from anywhere in the program.
When a variable is declared outside any function or block, it is placed in the global scope.
This means it is accessible from anywhere in your code.

```js
var globalVariable = 'I can be accessed anywhere!';
```

## Local scope

* Variables declared within a function or block are in the local scope.
They can only be accessed within that function or block.

```js
function myFunction() {
  var localVariable = 'I am inside a function';
  // localVariable can be used here.
}
```

// localVariable cannot be used here (outside the function).
In JavaScript, there are two types of local scope: function scope and block scope.

### Function Scope

* Variables declared with var inside a function are scoped to that function. They can be accessed anywhere within the function but not outside it.

```js
function checkFunctionScope() {
  var functionScoped = "I'm function-scoped";
  console.log(functionScoped); // Works fine
}
```

checkFunctionScope();
console.log(functionScoped); // Error: functionScoped is not defined

### Block Scope

* With ES6 (ECMAScript 2015), let and const keywords were introduced to allow block-scoping, which means variables declared with let and const are limited in scope to the block, statement, or expression in which they are used.

**_📝 NOTE:_**  const & let are Block Scope

```js
if (true) {
  let blockScoped = "I'm block-scoped";
  console.log(blockScoped); // Works fine
}
```

console.log(blockScoped); // Error: blockScoped is not defined

* Scope is an important concept in JavaScript because it helps to organize your code and make it more readable. By understanding scope, you can write more reliable and maintainable JavaScript code.
