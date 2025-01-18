/*----------------------------------------------------------*Type Conversion & Coercion*------------------------------------------------------*/

// Type Conversion => when you manually convert one type of value to another
// Type Coercion => when javaScript automatically converts behind the scene in-order to process/execute the code 


// Type Conversion 
const inputYear = '1991';
console.log(inputYear) //=> '1991' as a string
console.log(inputYear+18) //=> '199118' concatination '1991' + '18' 🧾

// Type Conversion of string to number //
// Number() => 'N' capital alphabet

// # Case 1
console.log(Number(inputYear)) //=> 1991 as a number
console.log(Number(inputYear)+18) //=> 1991 + 18 = 2009 [ addition of two number ]🧾

// # Case 2
const myName ='kaushal'
console.log(myName); //=> 'kaushal' as a string
console.log(Number(myName)); //=> NAN (Not a number), JS tries to convert the string to number , but fails. resulting in NAN.

// Type Conversion of number to string //
const age = 25;
console.log(age); //=> 25 as a number 
console.log(String(age)) //=> '25' as a string

/*--------------------------------------------------------------------------------------------------------------------------------------------*/
// Type Coercion

// Type Coercion will happen when an operator is dealing with two types of values. 
//It will change either one of the value to match the other.

// # Case 1
console.log("I'm" + 25 + 'years old') //=> ( + ) triggers coercion to convert number to string
//=> " I'm 25 years old" 🧾
//=> using Coercion , JS will convert 25 as a string

// # Case 2
console.log('23'-'10'-3) //=> ( - ) triggers reverse coercion , the strings will be converted into number
//=> 10 🧾
//=> using Reverse coercion, JS will convert '23' as 23 and '10' as 10 => 23-10-3 = 10 😊 

// # Case 3
console.log('25'*'4') //=> ( * ) triggers reverse coercion , the strings will be converted into number
//=> 100 , because that is the only was ( * ) operator will work.
//=> using Reverse coercion, JS will convert '25' as 25 and '4' as 4 => 25*4 = 100 😊 