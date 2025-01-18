/*-------------------------------------------------------*While loop in Java Script*----------------------------------------------------------*/
//While loop is similar to for loop ,both expects the following arguments to execute..
/*
💮 Initialization
💮 Conditional Checking
💮 Increment/Decrement
*/

//=> writing a [ for ] loop , just to show the similarities with while loop
for(let i = 1; i<=5 ; i ++){
    console.log(`${i}`, 'for loop');
}
/*
💮 Initialization => let i = 1      //
💮 Conditional Checking => i >= 5   //=> all are given as arguments inside the for loop..
💮 Increment/Decrement=> i ++       //
*/

//=> writing a [ while ] loop 
let j = 1
while(j<=5){
console.log(`${j}`,"while loop");
j++
}
/*
💮 Initialization => let j = 1      //outside of the while loop
💮 Conditional Checking => j >= 5   //=> given as arguments inside the while loop.. 
💮 Increment/Decrement=> j ++       //=> end of the function buddy
*/

// For example , we have to rool a dice , and the loop should run 

let dice = Math.trunc( Math.random() * 7);
/*
Math.trunc => will round up to a whole number => 5.87 = 5
Math.random => will randomly draw a number between 0-1
*/

// while(dice !== 6){
//     console.log(`dice rolled a ${dice}`)
//     dice = Math.trunc( Math.random() * 7);
// }

// we use while loop , when we dont know the times of iteration the loop will take ..


while(dice !== 6){
    console.log(`dice rolled ${dice}`)
    dice = Math.trunc( Math.random() * 7);
    if(dice === 6){
        console.log(`you have rolled ${dice}`)
    }
}