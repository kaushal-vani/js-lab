# Optional Chaining

## Optional chaining (?.)

- The optional chaining (?.) operator accesses an object's property or calls a function.
- If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

```ts
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

```

## Description

- The `?.` operator is like the `.` chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of `undefined`.
- When used with function calls, it returns undefined if the given function does not exist.

- This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing.
- It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.
