# TDZ [ Temporal Dead Zone ]

## What is the temporal dead zone in JavaScript, and how does it relate to let and const?

- The temporal dead zone (TDZ) is a specific period in the execution of JavaScript code where variables declared with let and const exist but cannot be accessed or assigned any value. During this phase, accessing or using the variable will result in a ReferenceError.

**To better understand the TDZ, let’s consider an example:**

```js
console.log(x); //ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

- In the example above, we try to access the variable `x` before its declaration and initialization.
- This triggers the TDZ because the variable exists within the scope but has not been assigned a value yet.
- As a result, JavaScript throws a ReferenceError indicating that the variable `x` cannot be accessed before initialization.

**The TDZ ends and the variable becomes accessible after its declaration and initialization:**

```js
let x = 10;
console.log(x); //Output: 10
```

- Here, `x` is properly declared and initialized before we attempt to access it, so there is no TDZ violation, and the value of `x` (which is 10) is successfully printed to the console.
  
**Similarly, the TDZ applies to const variables as well:**

```js
console.log(y); //ReferenceError: Cannot access 'y' before initialization
const y = 20;
```

- In this case, trying to access the const variable `y` before its declaration and initialization triggers the TDZ, resulting in a ReferenceError.

- The TDZ ensures that variables are accessed only after they have been properly declared and initialized, promoting better coding practices and reducing the likelihood of accessing variables in an undefined or uninitialized state.

- It’s worth noting that the TDZ does not apply to var variables. They are hoisted to the top of their scope and can be accessed throughout the scope, even before their actual declaration. This behavior can sometimes lead to unexpected results and potential bugs if not handled carefully.

- In summary, the TDZ is a period during which let and const variables exist but are not yet accessible. It helps catch potential issues caused by accessing variables before their initialisation, ensuring more reliable and predictable code.
