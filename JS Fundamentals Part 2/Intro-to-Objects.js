/*--------------------------------------------------------*Introduction to Objects*-----------------------------------------------------------*/
// In Array , the elements are referred using its index number . [] is used for Array
// Object, is a combination of key and value pair. {} is used for Objects
// keys are the variable name , and value are values assigned to the key or variable name ...

// # Reference Array 
const kaushalArray =[
    Kaushal, //=> element of an array
    vani,
    developer,
    25,
    ['dev','reven','tommy']
]
//this reference array isto be converted into an object 

const kaushal ={ //=> object literal syntax
    firstname: 'Kaushal',  //=> property of an object 
    lastName: 'vani',
    job: 'developer',
    age: 25,
    friends:['dev','reven','tommy']
} //=> object literal syntax

// in Array , order of elements matter , as we will retrive value of array based on it's index value ... used for ordered data
// in object , the order of the property {key : value} does not matter... used for unstructured data 

