# Nullish Coalescing

- The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

## nullish coalescing operator

The nullish coalescing operator can be seen as a special case of the logical OR (||) operator. The latter returns the right-hand side operand if the left operand is any falsy value, not only null or undefined. In other words, if you use || to provide some default value to another variable, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., '' or 0). See below for more examples.

The nullish coalescing operator has the fifth-lowest operator precedence, directly lower than || and directly higher than the conditional (ternary) operator.

```js
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

const sab = '' ?? 24;
console.log(sab);
// Expected output: ''

const sub = undefined ?? 69;
console.log(sub);
// Expected output: 69
```
