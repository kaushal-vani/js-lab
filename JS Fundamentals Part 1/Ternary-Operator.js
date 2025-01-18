/*---------------------------------------------------------------*Ternary Operator*-----------------------------------------------------------*/
// It is also similar to If-Else Statement. but it will reduce a lot of lines compared to the other statements
// also called as conditional operator
//it requires a mandatory else block.
// ternary Operator ()=> ?:

const age = 18;
age >= 21 ? console.log("let's go clubbing") : console.log(`we should wait for ${21-age} years`)
// so the whole statement can be saved into a expression using a variable name 
const legal = age>=21 ? 'clubbing' : `wait for ${21-age} years`
console.log(legal);
// so the whole ststement is now stored in a variable which returns a value .
// If the same as to be dealt with an If-Else statement ,
let drink;
if(age>=21){
    drink = 'beer 🍻'
}
else {
    drink =" water";
}
console.log(drink);

// as ternary operator will produce a value , it can directly be used in a template literal .

console.log(`I like to drink ${age>=21 ? 'beer' : 'water'}`);

// ternary operator is not a replacement for If-Else statement . it is used for quick and small tasks...
