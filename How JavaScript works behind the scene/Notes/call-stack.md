# Call Stack

A call stack is also known as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.

It uses the LIFO principle (Last-In-First-Out). When the engine first starts executing the script, it creates a global context and pushes it on the stack. Whenever a function is invoked, similarly, the JS engine creates a function stack context for the function and pushes it to the top of the call stack and starts executing it.

When execution of the current function is complete, then the JavaScript engine will automatically remove the context from the call stack and it goes back to its parent.

```js
function funcA(m,n) {
    return m * n;
}

function funcB(m,n) {
    return funcA(m,n);
}

function getResult(num1, num2) {
    return funcB(num1, num2)
}

var res = getResult(5,6);

console.log(res); // 30
```

* In this example, the JS engine creates a global execution context that enters the creation phase.

* First it allocates memory for `funcA`, `funcB`, the `getResult` function, and the res variable. Then it invokes `getResult()`, which will be pushed on the call stack.

* Then `getResult()` will call `funcB()`. At this point, `funcB`'s context will be stored on the top of the stack. Then it will start executing and call another function `funcA()`. Similarly, `funcA`'s context will be pushed.  

* Once execution of each function is done, it will be removed from the call stack. The following picture depicts the entire process of the execution:

![Scope in JS](https://www.freecodecamp.org/news/content/images/2022/12/5.png "Scope in JS")
