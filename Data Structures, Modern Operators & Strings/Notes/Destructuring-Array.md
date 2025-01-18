# Destructuring Array

Refer for more detailed information => <https://codelistic.com/array-destructuring-in-javascript>

## What is Array Destructuring in JavaScript?

- Destructuring the array in JavaScript simply means extracting multiple values from data stored in objects and arrays.
- The destructing assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

### The syntax of Array Destructuring JavaScript is as follows

```js
var a, b;
[a, b] = [5, 10];
console.log(a); // 5
console.log(b); // 10
```

### Object Destructuring

```js
({ a, b} = { a: 5, b: 10 });
console.log(a); // 5
console.log(b); // 10
```

#### Suppose we have a code given below

```js
var [first, second, third] = ["Laide", "Gabriel", "Jets"];
```

### With Destructuring

Let us see the syntax of the array destructuring javascript technique to break the array into smaller fragments.

```js
var first = "laide",
    second = "Gabriel",
    third = "Jets";
```

### Without Destructuring

Let us see the syntax of array destructuring javascript without using the destructuring technique. We will use a loop to obtain the broken fragments from an array list.

```js
var [1, 2, 3] = ["Laide", "Ola", "Jets"];
```

### Interchanging Or Swapping Variables

We can also use destructuring of the array for interchanging or swapping variables in JavaScript. Let us see an example.

```js
var x, y;
[x, y] = ["Boy", "Girl"];
[x, y] = [y, x];

console.log(x); //Output: Girl
console.log(y); //Output: Boy
```

### Ignoring Some Values

We can also ignore some parts of an array that we are not interested in. In array destructuring javascript, skipping these elements of array helps us to concentrate on a particular part of code that we are interested in. We can skip those uninterested elements by using a trailing comma with that element. Let us see an example of array destructuring javascript.

```js
Example - 1
var x, y;
[x = 25, y = 5] = [];
console.log(x); //Output: 25
console.log(y); //Output: 5

[x = 25, y = 5] = [1, 23];
console.log(x); //Output: 1
console.log(y); //Output: 23
```

```js
Example - 2
var a, b;
[a, , b] = ["Person_1", "Person_2", "Person_3"];

console.log(a); //Output: Person_1
console.log(b); //Output: Person_3
```

### Destructuring Returned Arrays

Those function that uses Array destructuring and returns an array makes an array functionality easy because the returned value will be a more accurate value. Let us see an example to understand in a better way.

```js
function contestants(){
    return ["contestant_1", "contestant_2", "contestant_3"];
}

var [a, b, c] = contestants();
console.log(a); //Output: contestant_1
console.log(b); //Output: contestant_2
console.log(c); //Output: contestant_3
```

## Nested Array Destructuring

In array destructuring javascript, we can not only destruct an object or element of an array, but we can also do nested destruction. But for doing nested destructuring, the item should also be an array so that we can assign items to the local variables. Let us see an example to understand in a better way

```js
var numbers = [5, [2, 3, 4], 12, 14];
var  [a, [x, y, z]] = numbers;

console.log(x); // Output: 2
console.log(y); // Output: 3
console.log(z); // Output: 4

```
