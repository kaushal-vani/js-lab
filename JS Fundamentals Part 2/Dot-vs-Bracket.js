/*--------------------------------------------------------*Dot vs Bracket Notation*-----------------------------------------------------------*/
// there are two ways to retrive data from the object :-> using Dot operator and using [] brackets

const kaushal ={ 
    firstname: 'Kaushal', 
    lastName: 'vani',
    job: 'developer',
    age: 25,
    friends:['dev','reven','tommy']
} 

console.log(kaushal); //=> that will print the whole object 

// Using Dot Operator

console.log(kaushal.job) //=> here the { . } operator is used to fetch thdat value of the property that is stored under the 'job' variable name

// Using [] brackets

console.log(kaushal['age']) //=> mentioning the property [key] name will fetch the required data inside the object specified..


//To add a new property in the object , we can do it in both ways 

kaushal.location = 'chennai'; //=> This is using [ . ] operator.
kaushal['instagram'] = 'kaushal_offl';  //=> this is using brackets.
