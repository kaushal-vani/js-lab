# Lexical Scoping

## What is Lexical Scoping?

- **Lexical** refers to the definition of things.
- Anything related to creating words, expressions, or variables is termed lexical.
- Lexical scope is the definition area of an expression.
- Another name for lexical scope is static scope.
- The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's definition space is its lexical scope.

### Example of Lexical Scope

```js
// Define a variable in the global scope:
const myName = "Kaushal";

// Call myName variable from a function:
function getName() {
  return myName;
}
```

In the snippet above, notice that we defined the myName variable in the global scope and called it in the `getName()` function.

Question: Which of the two spaces is myName’s lexical scope? Is it the global scope or the `getName()` function’s local scope?

Answer: Remember that lexical scope means definition space — not invocation space. Therefore, myName’s lexical scope is the global scope because we defined myName in the global environment.

## How Does Lexical Scope Work?

A JavaScript expression’s definition environment determines the code permitted to access it.

In other words, only code within an item's lexical scope can access it.

### For instance, consider the code below

```js
// Define a function:
function showLastName() {
  const lastName = "Sofela";
  return lastName;
}

// Define another function:
function displayFullName() {
  const fullName = "Oluwatobi " + lastName;
  return fullName;
}

// Invoke displayFullName():
console.log(displayFullName());

// The invocation above will return:
Uncaught ReferenceError: lastName is not defined
```

- Notice that the invocation of `displayFullName()` in the snippet above returned an Uncaught ReferenceError. The error returned because only code within an item's lexical scope can access the item.

- Therefore, neither the `displayFullName()` function nor its internal code can access the lastName variable because lastName got defined in a different scope.

- In other words, lastName’s lexical scope is different from that of `displayFullName()`.

- lastName’s definition space is `showLastName()` while `displayFullName()`’s lexical scope is the global environment.

### Now, consider this other code below

```js
function showLastName() {
  const lastName = "Sofela";
  return lastName;
}

// Define another function:
function displayFullName() {
  const fullName = "Oluwatobi " + showLastName();
  return fullName;
}

// Invoke displayFullName():
console.log(displayFullName());

// The invocation above will return:
"Oluwatobi Sofela"
```

- In the snippet above, `displayFullName()` successfully returned "Oluwatobi Sofela" because `displayFullName()` and `showLastName()` are in the same lexical scope.

- In other words, `displayFullName()` could invoke `showLastName()` because the two functions are both defined in the global scope.
