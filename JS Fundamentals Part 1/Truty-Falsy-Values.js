/*------------------------------------------------------------*Truthy & Falsy Values*---------------------------------------------------------*/
//Falsy Values are not exacty false, but will become false when we try to convert then into boolean.

/* #=> There are only 5 Falsy Values 
=> 0
=> ''
=> undefined
=> null
=> NAN
*/

// any thing apart from falsy value , will essentialy result in true when converted into boolean using type conversion.

console.log(Boolean(0))             //=> false, falsy value
console.log(Boolean(''))            //=> false, falsy value
console.log(Boolean('Kaushal'))     //=> true
console.log(Boolean(undefined))     //=> false, falsy value
console.log(Boolean(null))          //=> false, falsy value
console.log(Boolean({}))            //=> true

// # Case 1

const money = 0 ; 
//=> here is value of the ( money ) variable is ( 0 ) as a number , 
//=> if condition will execute based on boolean value,
//=> when 0 is converted into a boolean value , as it is a falsy value ,
//=> it will return false. so ( else ) will be executed...

if (money){
    console.log("Don't spend it all");
} else {
    console.log('Start Saving 💵 ');
}

// # Case 1
let height;
//=> here is value of the ( height ) variable is undefined , 
//=> if condition will execute based on boolean value,
//=> when ( undefined ) is converted into a boolean value , as it is a falsy value ,
//=> it will return false. so ( else ) will be executed...

if (height){
    console.log("you are tall");
} else {
    console.log('height is UNDEFINED ');
}