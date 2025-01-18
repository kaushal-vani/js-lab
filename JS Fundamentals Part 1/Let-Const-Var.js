/*-----------------------------------------------------------*Let_Const_Var*------------------------------------------------------------------*/
// ( let ) and ( const ) was introduced in es6 

/* let */ 

// ( let ) is used in the variable , when the valuw of it will change later , during execution of program.
// Reassigning a value of a variable , mutate the variable . block scoped
let age = 30;
age = 31

/*---------------------------------------------------------------------------------------------------------------------------------------------*/
/* const */ 

// ( const ) is used where the value of the value isfixed and will not be cahged later during execution.
// cannot be re-assigned , immutable variable .
const birthYear = 1999;
// cannot declare empty const variables;
// ( const job; ) => will throw error
// good practice to have little variable mutation inside your function.

/*---------------------------------------------------------------------------------------------------------------------------------------------*/
/* var */ 

// should be completely avoided to use , but understand what it does and is used for .
// ( var ) was used before es6 , ( var ) is equal to ( let )
var job ='dancer';
job='singer';
// ( var ) can also be used to reassign a value of a variable , mutate the variable . function scoped 
