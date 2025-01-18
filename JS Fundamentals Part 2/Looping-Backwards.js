/*-----------------------------------------------------*Looping Backwards & Loops in loops*---------------------------------------------------*/
//here we are going to loop the array in backwards

const oldArray = ['early morning','morning','afternoon','evening','night','mid night'];
const newArray = [];
//using push => correct way
for(let i = oldArray.length-1; i>=0; i--){
    newArray.push(oldArray[i])
}
console.log(newArray)

//using unshift => just for comparison between push and unshift
for(let i = oldArray.length-1; i>=0; i--){
    newArray.unshift(oldArray[i])
}
console.log(newArray)

//loop inside loop inside loop ...

for( let i = 1; i < 3; i++ ){
    console.log(`===== excercise ${i} =====`);
    for(let set = 4; set >= 1; set--){
        console.log(`---- set ${set} ----`);
        for(let rep = 1 ; rep <= 5; rep++){
            console.log(`__ rep ${rep} __`)
        }
    }
}