# For Of Loop

for...of

The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections)

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array = [...array1,...array2];

for (const element of array) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
// Expected output: "d"
// Expected output: "e"
// Expected output: "f"
```

## Syntax

```js
for (variable of iterable)
  statement
```

### variable

Receives a value from the sequence on each iteration. May be either a declaration with const, let, or var, or an assignment target (e.g. a previously declared variable, an object property, or a destructuring assignment pattern). Variables declared with var are not local to the loop, i.e. they are in the same scope the for...of loop is in.

### iterable

An iterable object. The source of the sequence of values on which the loop operates.

### statement

A statement to be executed on every iteration. May reference variable. You can use a block statement to execute multiple statements.

--------------------------------------------------------------------------------------------------------------------------------

## Iterating over a Map

```js
const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
};
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
};
// 1
// 2
// 3

for(const [index, element] of iterable) {
    console.log(index);
    console.log(element);
};
// a
// b
// c
// 1
// 2
// 3

```
