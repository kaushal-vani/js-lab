/*----------------------------------------------------------*Strings And Template Literals*---------------------------------------------------*/
const firstName = 'kaushal';
const job = 'Front end Developer';
const birthYear = 1999;
const currentYear = 2024;

/* => This is normal way of combining strings and variables that carry value , 
also used for concatination , 
which is time consuming and may missout empty space between strings.
*/
console.log("I'm " + firstName + ' a ' + (currentYear-birthYear) + ' year old ' + job)
// I'm kaushal a 25 year old Front end Developer 🧾

//  # Template Literals

const Template_Literal_Method = `I'm ${firstName} a ${(currentYear - birthYear)} year old ${job}`
console.log(Template_Literal_Method)
// I'm kaushal a 25 year old Front end Developer 🧾

// easier way to handle similar situations 
// also can be used to write multi-line string, without using ( \n\ => new line short cut )
