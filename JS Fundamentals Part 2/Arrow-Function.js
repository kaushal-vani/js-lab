/*----------------------------------------------------------------*Arrow Function*------------------------------------------------------------*/

// It is simplifies form of Function Expression .
//FUNCTION EXPRESSION
const expressionAge = function(birthYear){
    const age = 2024 - birthYear;
    return age;
}
const eAge = expressionAge(1999);
console.log('Expression Age',eAge);

// ARROW FUNCTION
const arrowAge = birthYear => 2024 - birthYear; // return is not required in one line arrow function..
const age = arrowAge(1999)
console.log('Arrow Function', age)

//Arrow function with multi line code 
const yearsUntilRetirement = birthYear => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return retirement; //arrow function which exceeds one line requires return 💢
}
const retirementAge = yearsUntilRetirement(1988)
console.log(`there is ${retirementAge} years till you retire`)

// Arrow function with two parameters
const fullName = (firstname,lastname)=> {
    return `my name is ${firstname} ${lastname}`;
}
const myName = fullName('kaushal','vani');
console.log(myName);
console.log(fullName('kaushal','vani'));