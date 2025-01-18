# Everything You Need to Know About the ‘this’ Keyword in JavaScript

## Understanding the Default Binding

In JavaScript, the `this` keyword is used to refer to the object that a function is associated with. When a function is called without any explicit binding, the ‘this’ keyword uses its default binding.

This means that it points to the global object. In a web browser, the global object is the window object.

```js
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = {
  name: 'John',
  greet: greet,
};

person.greet(); // Output: Hello, John!
```

In this example, when the `greet()` function is invoked using the person object, the `this` keyword inside the function refers to the person object. Therefore, `this.name` correctly resolves to `John`.

## Implicit Binding

- In JavaScript, the ‘this’ keyword can be bound implicitly. This happens when a function is called using dot notation with a context object.

- The object to the left of the dot becomes the context for the ‘this’ keyword inside the function. This means that the ‘this’ keyword refers to that object.

```js
const person = {
  name: 'John',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

person.greet(); // Output: Hello, John!
```

In this example, the `this` keyword within the `greet()` function is implicitly bound to the person object. As a result, `this.name` resolves to `John`

## Explicit Binding

- JavaScript provides methods to explicitly bind the `this` keyword to a specific object using functions such as `call()`, `apply()`, and `bind()`.

### The call() method

The `call()` method allows you to invoke a function and explicitly set the `this` keyword to a specified object. Consider the following example:

```js
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = {
  name: 'John',
};

greet.call(person); // Output: Hello, John!
```

In this example, the `greet()` function is invoked using the `call()` method, with the person object passed as the argument. As a result, `this` inside the function refers to the person object.

### The apply() method

The `apply()` method works similarly to the `call()` method, but it accepts an array of arguments instead.

```js
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = {
  name: ['John'],
};

greet.call(person); // Output: Hello, John!
```

### The bind() method

The `bind()` method returns a new function with the `this` keyword permanently bound to a specified object. The original function remains unchanged.

```js
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = {
  name: 'John',
};
const greetPerson = greet.bind(person);
greetPerson(); // Output: Hello, John!
```

In this example, the `bind()` method is used to create a new function `greetPerson()`, where `‘this’` is bound to the person object. The `greetPerson()` function, when invoked, correctly logs `Hello, John!`.

## Arrow Functions and ‘this’

In JavaScript, `arrow functions` have a unique behavior when it comes to the `this` keyword. Unlike traditional functions, `arrow functions` do not have their own `this` value.

Instead, they take on the `this` value of the scope they are in. This means that the `this` keyword inside an arrow function refers to the `Global Window object`. Understanding this behavior can save you from many bugs and Errors.

```js
const person = {
  name: 'John',
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};
person.greet(); // Output: Hello, undefined!
```

In this example, since arrow functions do not bind their own `this` value, the `this` keyword inside the `greet()` function refers to the global object, resulting in `undefined` being logged.

**_📝 NOTE:_** The value of this in an arrow function is inherited from the enclosing (lexical) scope.
