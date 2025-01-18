/*-------------------------------------------------------*Functions in Java Script*------------------------------------------------------------*/

'use strict'
// Function is a peice of code that can be reused over and over again... 
// its like a variable that contains blocks of code and executes them,
// variable holds value , function holds lines of code.
// function keyword [ function ] , followed by function name and statment or function buddy that need to be executed...

 function logger() {                    //
    console.log("My name is Kaushal")   //=> This is basically a function that can be called Nth number of times across the script.
 }                                      //

 logger();      //
 logger();      //=> invoking / running / calling a function 
 logger();      //

 //When we write a function we pass data to the function , or the function returns a data , it can also recieve and return data as well..
 // Just like Varaiable names , the Function names should also be Descriptive...

 function fruitProcessor(apples,oranges){
    console.log(apples,oranges)
    //=> (apples,oranges)=> apple and orange are parameters that are passed to the function,
    //  it is like variable that is specific to the function.
    const juice = (`This Juice is made up of ${apples} apples and ${oranges} oranges`);
    return juice 
 }

 const appleOrangeJuice = fruitProcessor(2,3);
    //=> (2,3)=> 2 for apple and 3 for orange are arguments that are passed to the function when it is called elsewhere,
    //=> variable passed when function is initialized is called parameter. values passed when function invoked is called arguments.
 console.log('appleOrangeJuice', appleOrangeJuice); 

const appleJuice = fruitProcessor(6,0)
console.log('appleJuice', appleJuice)

// Not all functions need to return something , not all function need to have a parameter ...
