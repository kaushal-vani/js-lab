/*-----------------------------------------------------*Function Declaration vs Expression*---------------------------------------------------*/
// parameter is the placeholder in the function,
// argument is the actual value that is used while invoking the function...

//# FUNCTION DECLARATION

function calcAge1(birthYear){   //
const age = 2024 - birthYear    //=> this is basicaly function declaration..
return age;                     //
}                               //

const age1 = calcAge1(1999);
console.log(age1);

// FUNCTION EXPRESSION

// Function without a name is called anonymous function.
// We write a function without a name to it and store it to a variable name.. this form of function is called as function epression ..
const calcAge2 = function (birthYear){
    const age = 2024 - birthYear
    return age;
}
//=> same way as invoking the function declaration , function expression is also handled..

const age2 = calcAge2(1978);
console.log(age2)

console.log(`Using Function Declaration => ${age1} and using Function Expression => ${age2}`)

// In Function declaration , the invoking of unction can be done before the function is even declared [ Hoisting ]...
// It is not possible to do the same in function Expression.
