# Logical Assignment Operator

## Logical OR assignment (||=)

The logical OR assignment `||=` operator only evaluates the right operand and assigns to the left if the left operand is falsy.

```js
const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration);
// Expected output: 50

a.title ||= 'title is empty.';
console.log(a.title);
// Expected output: "title is empty"
```

### OR Syntax

```js
x ||= y
```

### OR Description

Logical OR assignment short-circuits, meaning that x ||= y is equivalent to x || (x = y), except that the expression x is only evaluated once.

## Logical AND assignment (&&=)

The logical AND assignment `&&=` operator only evaluates the right operand and assigns to the left if the left operand is truthy.

```js
let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// Expected output: 2

b &&= 2;
console.log(b);
// Expected output: 0
```

### AND Syntax

```js
x &&= y
```

### AND Description

Logical AND assignment short-circuits, meaning that x &&= y is equivalent to x && (x = y), except that the expression x is only evaluated once.
No assignment is performed if the left-hand side is not truth

## Nullish coalescing assignment (??=)

The nullish coalescing assignment `??=` operator, also known as the logical nullish assignment operator, only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).

```js
const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50

a.speed ??= 25;
console.log(a.speed);
// Expected output: 25

```

### Nullish coalescin Syntax

```js
x ??= y
```

### Nullish coalescin Description

Nullish coalescing assignment short-circuits, meaning that x ??= y is equivalent to x ?? (x = y), except that the expression x is only evaluated once.
