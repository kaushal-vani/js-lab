/*-------------------------------------------------------*Data Types in JAVA SCRIPT*------------------------------------------------------------*/

//Values are of two types 


// # => Object
let details = {
    name :'kaushal'
}

// # => Primitive
let firstName = 'kaushal'
let rank = 24;

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

// There are 7 primitive data types 
let age = 24          // * Numbers 
let name = 'kaushal' // * String
let doorOpen = true // * Boolean
let job            // * undefined
                  // * null
                 // * Symbol
                // * Big Int

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

// * Numbers
let numbers = 'floating point numbers used for Decimals and Integers'

// * String
let string = 'sequence of charecter used for Text'

// * Boolean
let boolean = 'Logical type that can be only be true or false ... Used for taking Decisions'

// * undefined
let undefined = 'Value taken by a variable that is not yet defined (\'empty Value\')'

// * null
// null = 'also means empty value'

// * Symbol
let symbol = 'value that is unique and cannot be changed'

// * Big Int
let bigInt = 'Larger intergers than the numbers can hold'

/* ## Java Script has a feature called Dynamic Typing 
java script automatically determines the data type when the value is stored in the variable.. */

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

// data types working examples

let javaScript = true;        // Answers

console.log(javaScript);      // true

console.log(typeof true);     // boolean

console.log(typeof 24);       // number

console.log(typeof 'lol');    // string

/*---------------------------------------------------------------------------------------------------------------------------------------------*/
/* DYNAMIC TYPING

 Easily change the value that is hold by a Variable */

/* # Example 1 */
let javaScriptIsFun = true; //While initialy declaring a variable 'let' is used
console.log(javaScriptIsFun); //true 🧾
console.log(typeof javaScriptIsFun); //boolean

javaScriptIsFun = 'Yes!'    // when dynamic typing is done , 'let' is not required to be used . directly assign new value to the same variable.
console.log(javaScriptIsFun); //Yes! 🧾
console.log(typeof javaScriptIsFun); //string

/* # Example 2 */
let year;
console.log(year); //undefined 🧾
console.log(typeof year); //undefined

year = 1999;
console.log(year); //1999 🧾
console.log(typeof year); //number

/* # Example 3 */
console.log(typeof null); //object 
//but actual answer is null ; but it is an bug in javaScript 