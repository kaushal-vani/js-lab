# Basic Topics to know Java Script Behind The Scene

## Compilation

- Compilation is the process of translating source code written in a high-level programming language into a lower-level language, such as machine code, that can be executed by a computer.
  
## Interpretation

- An interpreter reads a program line by line, reading every expression and gives output if the program is correct. It stops/gives error when it encounters the first mistake in any line of code. This process is interpretation.

## JIT [Just In Time]

- The JIT compiler helps improve the performance of Java programs by compiling bytecodes into native machine code at run time.

## AOT [Ahead Of Time]

- Ahead-of-time compilation (AOT compilation) is the act of compiling an (often) higher-level programming language into an (often) lower-level language before execution of a program, usually at build-time, to reduce the amount of work needed to be performed at run time.
![AOT vs JIT](https://www.monarch-innovation.com/wp-content/webp-express/webp-images/uploads/2023/07/AOT-vs.-JIT-Compiler-in-Angular-1400x700.jpg.webp "AOT vs JIT")

## AST [Abstract Syntax Tree]

- An abstract syntax tree (AST) is a data structure used in computer science to represent the structure of a program or code snippet.

## Thread pool

- A thread pool is a group of worker threads separate from the main event loop thread Node. js uses to execute JavaScript code and handle requests.

## Stack

![Call Stack](https://miro.medium.com/v2/resize:fit:720/format:webp/1*rJ2Gwch8CiATB_4MJzm-6g.png "Call Stack")

- Stack is a Data structure, which is similar to an array, except that we cannot access the elements using the index directly and we can only insert and delete elements at the Top of Stack(ToS).

- We majorly perform 2 operations in stack

- - Push → Inserting an Element
- - Pop → Deleting an Element
- - Stack follows LIFO (Last In First Out) , means

- If stack encounter push operation then the element is inserted at the Top of the Stack(ToS),
- If stack encounters pop operation the element at the Top of the Stack(ToS) is removed first.

## Call Stack

- The call stack is a crucial concept in JavaScript's runtime environment, representing the mechanism by which the JavaScript engine keeps track of function calls in a program.
- Stack of Functions to be executed
- Manages execution contexts
- Stacks are LIFO [Last In First Out]
  
![Call Stack](https://miro.medium.com/v2/resize:fit:720/format:webp/1*rJ2sh-q1deQGGGVG5gYyIQ.png "Call Stack")

(1) When the function call for `one()` is made, it is pushed to the call stack.

(2) Inside the one function another function call to `two()` is made. So now the two is pushed to the call stack, and the control is transferred to function two.

(3) Inside two another function call to `three()` is made. So three is pushed to the call stack, and the control is transferred to function three.

(4) The console.trace in function three will print the call stack, then there is no more statement to execute in function three , so, it will be removed from the call stack and the control go back to function two.

(5) In the function two , there is no more statement to execute, so two is removed from the call stack and the control transferred to the function one .

(6) In the function one there is no more statement to execute, now it also removed from the stack.

## How many function call can be pushed to Stack ?

- The Stack is a data structure there will some certain amount of memory allocated to the call stack, So there is only a certain number of calls that can be pushed to the call stack. If the call stack is full then it will throw Maximum call stack size exceeded(StackOverflow) exception.
  
![Call Stack](https://miro.medium.com/v2/resize:fit:640/format:webp/1*Qy_MphlO_Hpxl5_9hguZsQ.png "Call Stack")

## Heap

- The heap is a different space for storing data where JavaScript stores objects and functions. Unlike the stack, the engine doesn't allocate a fixed amount of memory for these objects. Instead, more space will be allocated as needed.

## Asynchronous vs Synchronous

- Asynchronous code allows the program to be executed immediately whereas the synchronous code will block further execution of the remaining code until it finishes the current one.
  
## Thread of execution [JS]

- Java Script is a single threaded language
- Single sequential flow of control
- Java Script is synchronous language with asynchronous ability
- A thread has a call stack and memory heap

**_📝 NOTE:_**  Java Script is Synchronous , everything happens line by line in single tread
