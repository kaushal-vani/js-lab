# Spread Operator , Rest Operator

- The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
- In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

For Example

## Spread Operator

```js
const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined); 
//Output => [ 2, 4, 6, 1, 3, 5 ]
```

## Rest Operator

```js
function f(a, b, ...args) {
 console.log(args);
}
f(1, 2, 3, 4, 5);
//Output => [ 3, 4, 5 ]
```

## Difference between Spread Operator and Rest Operator

- The spread operator (...) unpacks the elements of an iterable object. spread operator is used where values are seperated by `,`.
- The rest parameter (...) packs the elements into an array. rest parameter is used where variables are seperated by `,`.

## JavaScript spread operator and array manipulation

### Constructing array literal

The spread operator allows you to insert another array into the initialized array when you construct an array using the literal form. See the following example:

```js

let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log(chars); // ["A", "B", "C", "D"]
```

### Concatenating arrays

Also, you can use the spread operator to concatenate two or more arrays:

```js
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]
```

### Copying an array

In addition, you can copy an array instance by using the spread operator:

```js
let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]
```

## JavaScript spread operator and strings

Consider the following example:

```js
let chars = ['A', ...'BC', 'D'];
console.log(chars); // ["A", "B", "C", "D"]
```

In this example, we constructed the chars array from individual strings. When we applied the spread operator to the ‘BC’string, it spread out each character of the string 'BC' into individual characters.

## Summary

- The `spread operator` is denoted by three dots (...).
- The `spread operator` `unpacks elements of iterable objects` such as arrays, sets, and maps into a list.
- The `rest parameter` is also denoted by three dots (...). However, it `packs the remaining arguments of a function into an array.`
- The `spread operator` can be used to clone an iterable object or merge iterable objects into one.
