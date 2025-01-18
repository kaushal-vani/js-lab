/*-------------------------------------------------------*Iteration - For Loop*------------------------------------------------------------*/
// If-Else statement is one of the control structures.
// For loop is also a control structure..

//# FOR LOOP is used places where there is a task that is done repeatedly for a period of time until it achieves its goal.

/* 
Every Loop  needs these three parameters:->
💮 Initialization
💮 Conditional Checking
💮 Increment/Decrement
*/
// => For loop 
// for example , i want to count till 10 , as in 
console.log('tick tick 1');
console.log('tick tick 2');
console.log('tick tick 3');
console.log('tick tick 4');
console.log('tick tick 5');
console.log('tick tick 6');
console.log('tick tick 7');
console.log('tick tick 8');
console.log('tick tick 9');
console.log('tick tick 10');

for(let rep = 1; rep <= 10; rep++){ //=> the for loop will execute till rep <=10 . the rep value will increase by 1 , for every loop cycle.
    console.log(`tick tick ${rep}`, 'for loop ');//=> initialy rep = 1 , after one loop cycle , rep value = 2 and so on....
}
/*
💮 Initialization => let rep = 1
💮 Conditional Checking => rep <= 10
💮 Increment/Decrement=> rep ++
*/
// instead manually repeating the same task over and over again , for loop will help us to iterate the code.