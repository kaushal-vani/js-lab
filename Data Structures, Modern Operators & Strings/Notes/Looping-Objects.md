# Looping Objects: Object Keys, Values, and Entries

## Object.keys()

The `Object.keys()` static method returns an array of a given object's own enumerable string-keyed property `names`.

```ts
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]

```

### Description of Object.keys()

- `Object.keys()` returns an array whose elements are strings corresponding to the enumerable string-keyed property names found directly upon object.
- This is the same as iterating with a `for...in` loop, except that a `for...in` loop enumerates properties in the prototype chain as well.
- The order of the array returned by `Object.keys()` is the same as that provided by a `for...in` loop.
- If you need the property values, use `Object.values()` instead. If you need both the property keys and values, use `Object.entries()` instead.

## Object.values()

The `Object.values()` static method returns an array of a given object's own enumerable string-keyed property `values`.

```ts
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
```

### Description of Object.values()

- `Object.values()` returns an array whose elements are values of enumerable string-keyed properties found directly upon object.
- This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.
- The order of the array returned by `Object.values()` is the same as that provided by a for...in loop.
- If you need the property keys, use `Object.keys()` instead. If you need both the property keys and values, use `Object.entries()` instead.

## Object.entries()

The `Object.entries()` static method returns an array of a given object's own enumerable string-keyed property `key-value pairs`.

```ts
const object1 = {
  a: 'somestring',
  b: 42,
};

// key = a 
// value = 'somestring'

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"
```

### Description for Object.entries()

- `Object.entries()` returns an array whose elements are arrays corresponding to the enumerable string-keyed property key-value pairs found directly upon object.
- This is the same as iterating with a `for...in` loop, except that a `for...in` loop enumerates properties in the prototype chain as well.
- The order of the array returned by `Object.entries()` is the same as that provided by a `for...in` loop.
