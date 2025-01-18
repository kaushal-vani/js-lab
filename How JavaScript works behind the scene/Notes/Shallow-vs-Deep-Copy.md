# Shallow vs Deep Copy

![Shallow vs Deep Copy](https://res.cloudinary.com/practicaldev/image/fetch/s--CjdqwIq1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/llosmmb3rzbq5ravmfcp.jpg "Shallow vs Deep Copy")

## Shallow copy

Shallow copies duplicate as little as possible. A shallow copy of a collection is a copy of the collection structure, not the elements. With a shallow copy, two collections now share the individual elements.

## Deep copy

Deep copies duplicate everything. A deep copy of a collection is two collections with all of the elements in the original collection duplicated.

## Primitive data types

When you create these values, they are tightly coupled with the variable they are assigned to. They only exist once. That means you do not really have to worry about copying primitive data types in JavaScript. When you make a copy, it will be a real copy.

```js
let a = 5;
let b = a;
b = 6;

console.log(a); // 5
console.log(b); // 6
```

## Reference data types

Technically, arrays are also objects, so they behave in the same way. I will go through both of them in detail later.

Here it gets more interesting. These values are actually stored just once when instantiated, and assigning a variable just creates a pointer (reference) to that value.

### With Object

Create an object `a` with property `test` with value `test1` and then copy `b = a` and then change value `test` in object `b`.
Let see example:

#### Shallow copy [Reference data types]

```js
const a = 5;

const b = a;

b.test = 'test2'; //Shallow copy

console.log(a); // test 2
console.log(b); // test 2
```

#### Deep copy [Reference data types]

```js
const a = { test: 'test1' }

//you can use spread or Object.assign() method for clone an object

const b = {...a}; // or const b = Object.assign({},a);

b.test = 'test2'; // Deep copy

console.log(a); // test 1
console.log(b); // test 2
```
