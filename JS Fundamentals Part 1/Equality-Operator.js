/*---------------------------------------------------------------*Equality Operators*---------------------------------------------------------*/
/*
Equality Operator will return Boolean value , 
if the variable defined matchs with the value , it returns true,
if the variable defined does not match with the value , it returns false,
*/
const age = 18;
if(age === 18) //=> strict equality operator is used here.
 {
    console.log('you are an adult 😁')
}

//=>  === , means strict Equality Operator . does not perform Type Coercion.
//=>  ==  , means loose Equality Operator . it performs Type Coercion.
let a = '18'
let b = 18

c = a == b;  //=> [ true ] loose Equality Operator. Type coercion will happen.
d = a === b; //=> [ false ] strict Equality Operator. does not perform Type Coercion.

// # avoid loose Equality Operator as much as you can , can invoke bugs in code tgat can be hard to find.

prompt('what is your birth year ?') //=> this will make a pop-up appear in tab and get input from the user.

const inputValue = prompt('what is name ?') 
//=> value from promt will be stored in ( inputValue ) variable . 
//but ideally it will be saved as a string

// ## we can use type conversion to convert the string into number as per the requirement..
const inputAge = Number(prompt('what is your age'))
console.log(inputAge)

//we can use if,else,elseif to play around the Equality Operator to get better understanding
let consoleAge;
if(inputAge === 10){
consoleAge = 'my age is 10'
}
else if(inputAge === 20){
    consoleAge = 'my age is 20'
}
else{
    consoleAge = 'enter 10 or 20 '
}

//=> != loose difference operator
//=> !== strict difference operator