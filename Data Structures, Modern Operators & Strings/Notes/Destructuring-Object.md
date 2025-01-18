# Destructuring Object

Refer for more detailed information => <https://codelistic.com/object-destructuring-in-javascript>

```js
Basic Object
const employee = {
    firstName: 'Bruce',
    lastName: 'Lee',
    role: 'Teacher',
};
```

We can say we packed the key-value pairs of data which we can retrieve at any point later by using the so-called “dot-syntax” and store the values of specific keys into variables, e.g.:

```js
const firstName = employee.firstName;
const lastName = employee.lastName;
const role = employee.role;
```

We immediately see that this can get quite repetitive as the number of values we want to retrieve gets larger. Instead, we can utilize object destructuring to unpack the data we want and avoid repeating ourselves

```js
const { firstName, lastName, role } = employee;

console.log(firstName); // Bruce
console.log(lastName); // Lee
console.log(role); // Teacher
```

Unlike array destructuring, we should be more careful if we want to destructure into variables that have been declared before, so for example:

```js
let firstName;
let lastName;
let role;

{ firstName, lastName, role } = employee; // Syntax Error !!
```

This will result in an error, since using curly braces outside of the context of declaring the variables ( let), Javascript considers them to represent a code block instead. So, we should remember to explicitly wrap the whole expression using parenthesis ( … ) like this:

```js
( { firstName, lastName, role } = employee )

console.log(firstName); // Bruce
// ... etc
```

## Missing elements

If we try to destructure an element which doesn’t exist in the object, the variable gets assigned the value of undefined

```js
const employee = {
    firstName: 'Bruce',
    lastName: 'Lee',
    role: 'Teacher',
};

let { firstName, middleName } = employee;
console.log(firstName); // Bruce
console.log(middleName); // undefined
```

You can also notice that we omitted to destructure some of the keys that exist in the employee variable (lastName and role). Using object destructuring we have the liberty of choosing what we need to extract and safely ignoring the rest.

## Changing the order

Changing the order of variables we are destructuring into doesn’t affect the destructuring in any way:

```js
let { role, lastName, firstName } = employee;
console.log(role); // Teacher
// ...
```

This is possible because in JS objects store their value by named keys, unlike arrays by index where the order matters

## Renaming

But what if we want to use a different name for the variables we destructure the object into? A typical scenario for this is when you fetch data via an API call from the backend that might have a different naming convention for variables, or a different variable name just fits better into the current context.

Let’s check the following example:

```js
const employee = {
    first_name: 'Bruce',
    last_name: 'Lee',
    role: 'Teacher',
};

let { 
    first_name: firstName, // rename
    last_name: lastName, // rename
    role
} = employee;

console.log(firstName); // Bruce
console.log(lastName); // Lee
console.log(role); // Teacher
```

As you can see, we can use the colon `:` operator to rename the variable we are extracting the data into.
An easy way to remember this is to imagine saying to yourself

`this`: `into that`

## Default values

We’ve seen previously that if we try to destructure a value for a key in the object that doesn’t exist, we get undefined:

```js
const employee = {
    firstName: 'Bruce',
    lastName: 'Lee',
};

let { firstName, middleName } = employee;
console.log(middleName); // undefined
```

We can actually define a default value which will be assigned instead of undefined:

```js
let { firstName, middleName = 'The Dragon' } = employee;
console.log(middleName); // The Dragon
```

## Nested object destructuring

We can destructure complex nested objects which can contain arrays as well. In that case we can combine both object and array destructuring (see Array destructuring in Javascript) at the same time:

```js
const employee = {
    firstName: 'Bruce',
    lastName: 'Lee',
    role: 'Teacher',
    addresses: [
        {
            street: 'Main street 9',
            city: 'San Francisco',
            country: 'USA',
        },
        {
            street: 'Not main street 122',
            city: 'Hong Kong',
            country: 'China',
        },
    ],
};

let {
    lastName,
    role: occupation,
    addresses: [
        {city: recentCity}, {city: oldCity}
    ]
} = employee;

console.log(lastName); // Lee
console.log(occupation); // Teacher
console.log(recentCity); // San Francisco
console.log(oldCity); // Hong Kong
```

We can see that we managed to “dig out” cities from the nested structure of the employee object by writing the destructuring pattern that matches that object. In this case, we only needed cities from addresses objects so other values were ignored.
