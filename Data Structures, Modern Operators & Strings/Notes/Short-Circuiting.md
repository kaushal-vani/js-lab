# Short Circuitig

- In JavaScript, short-circuiting is the evaluation of an expression from left to right with `||` and `&&` operators.

- If the condition is met and the rest of the conditions won’t affect the already evaluated result, the expression will short-circuit and return that result (value).

## Short-circuiting with the or (||) operator

**_📝 NOTE:_** The || operator will return the first truthy value of all the operands, or simply the last value if all of them are falsy.

```js
true || false 
// returns true 

console.log(3 || 'Orange'); //=> 3
console.log('' || 'Orange'); //=> Orange
console.log(true || 0); //=> true
console.log(undefined || null); //=> null
```

### Explanation (||) operator

In the example below we want to check if the object person contains the `job` key. To do this, we simply `console.log` the value of `person` or for `person.job` we use OR to get the `default string of unemployed`.

```js
var person = {
  name: 'Jack',
  age: 34
}
console.log(person.job || 'unemployed');
// 'unemployed'
```

Since person.job doesn’t exist, we get undefined. Since `undefined is a falsy value`, JavaScript will instead go to the other side of the || and accept whatever value is there.

## Short-circuiting with the and (&&) operator

**_📝 NOTE:_** The && operator will return false as soon as it gets any falsy value and will return the last true value if all the values are truthy.

```js
true && false 
// returns false

console.log(0 && 'Orange'); //=> 0
console.log('' && 'Orange'); //=> ''
console.log(true && null); //=> null
console.log('Apple' && 'Orange'); //=> Orange
```

### Explanation (&&) operator

It’s possible to take advantage of short-circuiting and to shorten, or even avoid, the `if` statement.

In the example below, we want to check if an object person key `age` value is higher than `18`. And if yes, we state that this person is allowed to drive.

```js

var person = {
  name: 'Jack',
  age: 34
}
console.log(person.age > 18 && 'Driving allowed');
// 'Driving allowed'
```

Since `person.age` is higher than `18`, we get true. In this case, JavaScript has `no false value`, so `the && operator returns the last true value`.
