/*---------------------------------------------------------------*If / Else Statements*--------------------------------------------------------*/
const yourAge = 15;
const legalAge = 18;
const isOldEnough = yourAge >= legalAge;

// ( If ) requires a boolean value to check if the block of code should execute or not . 
// if argument that is passed is ( true ) then the block of code associated with it will execute, 
// else ( false ) it will neglect the block of code.
if(isOldEnough)
{
    console.log('Vrooom...... 🏎 You can Drive')
} 

//else block is totally optional , if ( If ) does not execute , ( Else ) will execute.
// if no ( else ) is present , program just tend to move on .
//  It is agood coding practice to have a ( else ) block to every ( If ) block
else
{
    const waitingYears = legalAge - yourAge;
    console.log(`You have to wait another ${waitingYears} years :( `)
}

/* If-Else Contol Structure 
If(){
    }
    else{
    }
    */

// # => It helps us to take control of the code ,
//  helps use to decide if certain block of code needs to be executes 
// . if so when it has to be executed [ based on the boolean argument ]

/*--------------------------------------------------------------------------------------------------------------------------------------------*/
//# => method 1
//variable defined inside block of code , cannot be used outside of it . 
const currentFinancialYear = 2024

if(currentFinancialYear>= 2020){
    let profit = '100%'
    console.log(profit)   // If you console.log it outside of this block , it will not show the value of the variable...
}
else{
    let profit = '30%'
    console.log(profit)   // If you console.log it outside of this block , it will not show the value of the variable...

}

//# => method 2 [ try doing this instead of method 1]
const thisYear = 2025
let century;  //=> by declaring the variable outside the block , the value assigned to it can be mutable based on the boolean condition

if(thisYear <= 2000){
    century = "this is 20th century" //=> value to the variable is re-assigned based on the condition
}else {
    century = "this is 21th century" //=> value to the variable is re-assigned based on the condition
}
console.log(century); //=> now it can be console.log outside the block and value will reflect to the variable based on the block executed.
//=> "this is 20th century" 🧾