/*-------------------------------------------------------------*Object Methods*---------------------------------------------------------------*/
'use strict'

//  Any function that is attached to an Object is called as a method..
// We can add the function inside an object as an property of it ..

const kaushal = { 
    firstname: 'Kaushal',  
    lastName: 'vani',
    job: 'developer',
    birthYear: 1999,
    hasDriverLicense: true,
    friends:['dev','reven','tommy'],
    // calcAge: function (birthYear){   //
    //     return 2024- birthYear       //=> This is one way of declaring function inside the object .   
    // }                                // but everytime we invoke the function, an argument has to be passed manually.

// # [ this ] will reference the object
/*
    calcAge: function (){
        return 2024 - (this.birthYear)  // [this]=> points to the object that we are declaring the variable. 
    },                                       //  will dynamically change the data of the argument , if the data of the value is changed in object.
*/
    calcAge: function () {
        this.age = 2024 - this.birthYear;
        console.log(this.age)
        return this.age;
    },

    getSummary: function () {
        this.summary = `My name is ${this.firstname} ${this.lastName}, I am a ${this.calcAge()} year old ${this.job}. He has ${this.hasDriverLicense ? 'a' : 'no'} License`;
        return this.summary;
    }
} 

console.log(kaushal.calcAge(),'using [this]')
console.log(kaushal.age, kaushal.getSummary());
console.log(kaushal.summary);

// Array uses Built in methods , where as in objects we create our own method..