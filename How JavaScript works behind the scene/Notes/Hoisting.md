# Hoisting

- Variable and function hoisting are concepts in JavaScript that affect the way variables and function declarations are processed during the compilation phase.
- Hoisting allows you to use variables and functions before they are declared in the code, as if they were "hoisted" to the top of their respective scopes.

| Type.                                | Hoisted | Initial Value       | Scope  |
| :---                                 |  :----: |    :----:           |   ---: |
| Function Declaration                 | Yes ✔   | Actual Function    | Block   |
| Variable                             | Yes ✔   | Undefined          | Function|
| let & Const                          | No 🚫   | Uninitialized, TDZ | Block   |
| Function Expression & Arrow Function |         | Depends based on var,let or const|       |

## Variable Hoisting

In JavaScript, variable declarations are hoisted to the top of their scope but not their assignments.

### **Let's see an Variable Hoisting example**

```js
console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10
```

- In the example above, the variable `x` is declared and initialized with the value `10` later.
- However, when we log the value of `x` before its declaration, it doesn't throw an error but returns `undefined`.
- This is because during the compilation phase, the variable declaration `var x;` is hoisted to the top.

### **It is equivalent to**

```js
var x;
console.log(x); // Output: undefined
x = 10;
console.log(x); // Output: 10
```

**_📝 NOTE:_** Remember that only the declaration is hoisted, not the assignment.

## Function Hoisting

Function declarations are also hoisted to the top of their scope. Unlike variable hoisting, function declarations are hoisted along with their entire function definition.

### **Let's see an Function Hoisting example**

```js
foo(); // Output: "Hello from foo!"
function foo() {
  console.log("Hello from foo!");
}
```

In the example above, we call the function `foo()` before its actual declaration. Despite this, the code executes without any error because the function declaration is hoisted to the top of its scope,

### **equivalent to:**

```js
function foo() {
  console.log("Hello from foo!");
}
foo(); // Output: "Hello from foo!"
```

## Variable Hoisting vs. Function Hoisting

- It's important to note that function declarations take precedence over variable declarations during hoisting.

**_📝 NOTE:_** Function declaration > Variable declaration

### **Let's see an example to understand this:**

```js
var x = 10;
function example() {
  console.log(x); // Output: undefined (variable hoisted but not the assignment)
  var x = 20;
  console.log(x); // Output: 20
}
example();
```

- In the example above, `x` is both a variable and a function declaration within the `example()` function.
- The variable `x` is hoisted, but its assignment is not, so the first `console.log` outputs `undefined`.
- The function declaration is also hoisted, and the second `console.log` outputs `20`, the value assigned within the function.

## Conclusion

```txt
In summary, hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes during the compilation phase. Understanding hoisting is essential for writing clean and predictable JavaScript code. 
However, it's good practice to always declare variables at the beginning of their scope and avoid relying on hoisting for code readability and maintainability.
```
