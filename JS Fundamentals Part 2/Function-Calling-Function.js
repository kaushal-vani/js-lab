/*--------------------------------------------------------*Function calling other Function*----------------------------------------------------*/
//here we are going to make interaction between two functions..

function cutPieces (fruit) {    //
    return fruit* 5             //=> NEW FUNCTION WITH [ fruit ] parameter is being created..   
}                               //

function fruitJuice (apple,orange){
    //Function called inside another Function...
    const applePeice = cutPieces(apple);    //=>the [apple] parameter works as an argument for [fruit] in cutpeice function , 
    // which is invoked inside fruitJuice function
    const orangePeice = cutPieces(orange);  //=>the [orange] parameter works as an argument for [fruit] in cutpeice function , 
    // which is invoked inside fruitJuice function

    return `this juice is made with ${applePeice} peices of Apple and ${orangePeice} peices of Orange`
}

//when the argument for fruitJuice is being passes , it will then pass to cutFruit and gets the value . 

const juice = fruitJuice(4,8);
console.log(juice);

// Anything after the return will not execute...

/* 
There are 3 types of Functions:
1) function declaration
2) function expression
3) arrow function
*/

/* 
Any function will do 3 of the following
1) Input data
2) Transform data
3) Output data 
*/