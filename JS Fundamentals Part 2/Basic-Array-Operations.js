/*--------------------------------------------------------*Basic Array Operations*------------------------------------------------------------*/
'use strict'
// Basic operations or Methods are used in Array to manipulate/mutate the array as per our requirement..
const friends = ['dev','reven','vani']

// Adds Element => Push & Unshift

// # PUSH => helps to add an element to end of an array 
const newLengthPush = friends.push('lotus');
console.log(friends);
console.log(newLengthPush); //=> returns length of new array 

// # UNSHIFT => helps to add an element at the beginning of an array 
const newLengthUnshift = friends.unshift('rimmon');
console.log(friends);
console.log(newLengthUnshift); //=> returns length of new array

// Removes Element => Pop & Shift

// # POP => helps to remove an element from end of an array

friends.pop();
const popped = friends.pop(); //=> returns the element that is beinged popped from the array..
console.log(friends);
console.log(popped);

// # SHIFT => helps to remove an element from the beginning of an array 
friends.shift();
const shifted = friends.shift(); //=> returns the element that is beinged shifted from the array..
console.log(friends);
console.log(shifted);

// # INDEXOF => will help us to know the index position of element in the array .
const revenIndex = friends.indexOf('reven');
console.log(revenIndex);

// # INCLUDES => will help us to determine if the array consist of an element that we are looking for nad return us with a boolean value..
// Includes follows an strict equality operator to verify if element exist in the array ...
const revenIncludes = friends.includes('reven');
console.log(revenIncludes);
