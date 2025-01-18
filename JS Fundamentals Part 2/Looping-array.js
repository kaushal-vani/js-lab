/*--------------------------------------------------*Looping Array , Breaking & Continuing*---------------------------------------------------*/
//We are going to see how to loop the elements of an array  using FOR loop ..

const kaushal = ['vani', 25 , true,[1,2,3,4,5,6,7,8,9,10], null];

for(let i=0; i< kaushal.length;i++){
console.log(kaushal[i]); //=> reading an array (seeing what is there in an existing array)
console.log(typeof(kaushal[i]));
}
/*
i                   => [ i ] is generic variable name used in any looping statements..
i=0                 => [ i ] is started with 0 , because index value of any array starts with 0.
i< array.lenght     => if we compare [ i ] with length of the array , as we add elements to the array , the for loop will still execute,
                       as the comparision value will dynamically change.
i++                 => [ i ]++ => i= i+1 => if [ i ] = 1 => i = 1+1 => i = 2 => i = 2+1 => i = 3 => and so on...
*/
//===========================Let us try creating a new array and push some vale from existing array using for loop===========================//
// Example 1
//WAY - 1
const types = [];
for(let j =0;j< kaushal.length;j++){
 types[j] = typeof kaushal[j]; //=> filling an array (puting value in new array)
}
console.log(types)
// WAY - 2 [ using push ] 
const types2 = [];
for(k=0;k<kaushal.length;k++){ 
types2.push(kaushal[k]); //=> push will add element from last => []=>[<- 1]=>[1 <- 2]=>[1 <- 2 <- 3]=>[1 <- 2 <- 3 <- 4] = [1,2,3,4]
}
console.log(types2,'push')
// To show difference between ( push and unshift )
const types3 = [];
for(k=0;k<kaushal.length;k++){
types3.unshift(kaushal[k]); //=> unshift will add element from first => []=>[1 ->]=>[2 -> 1]=>[3 -> 2 -> 1]=>[4 -> 3 -> 2 -> 1] = [4,3,2,1]
}
console.log(types3,'unshift')

// Example 2
//WAY - 1
const year=[1978,1998,1953,1999,2006,2012];
const age= [];
for(let i = 0; i< year.length; i++){
    age[i] = 2024-year[i];
};
console.log(age);

//Way - 2 [ using push ]
const currentAge = []
for(i=0;i<year.length;i++){
    currentAge.push(2024-year[i]);
}
console.log(currentAge)
console.log(typeof(currentAge))
//====================================================Two important statements for loops======================================================//
//continue => to exit current iteration of the loop and continue to next one..
//break => completely terminate the whole loop..

const vani = ['vani', 25 , 'kaushal','malavika',true,[1,2,3], null];
for(i=0;i<vani.length;i++){
    if(typeof(vani[i]) !== 'string') continue; //=> if the type of doesn't match with the string type , it will skip and move on .
    console.log(vani[i],typeof(vani[i]),"continue")
}

for(i=0;i<vani.length;i++){
    if(typeof(vani[i]) === 'number') break; //=> if the type of doesn't match with the string type , it will skip and move on .
    console.log(vani[i],typeof(vani[i]),"break")
}

