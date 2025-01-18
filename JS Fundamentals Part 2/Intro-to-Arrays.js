/*--------------------------------------------------------*Introduction to Arrays*------------------------------------------------------------*/
// It gets hectic to store dat of large quantity in one by one variable. instead we can use a data structure like array to store it..

const friend1 = "vani"
const friend2 = "malavika"
const friend3 = "pavan"

//instead of storing it in seperate veriable . bring allin a single array.

const friends = ['vani','malavika','pavan']; //=> it starts from index 0 =>[0,1,2]
console.log(friends)
console.log(friends[0]) //=> vani
console.log(friends[1]) //=> malavika
console.log(friends[2]) //=> pavan

console.log(friends.length) //=> this will give us the number of elements present in the array.

console.log(friends[friends.length -1]) //=> value of last element in the array ....
//arrays are not premetive value . Only premetive values are immutable...

