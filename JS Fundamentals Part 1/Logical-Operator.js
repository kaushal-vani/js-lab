/*--------------------------------------------------------------*Logical Operator*-------------------------------------------------------------*/
const hasLicense = true;
const hasCar = false;

console.log(hasCar || hasLicense); // hasCar value is False & hasLicense value is True , 
// AND will only accept if both value is true , ()=> (true && false) => false
console.log(hasLicense && hasCar); // hasCar value is False & hasLicense value is True ,
// OR will accept if any one value is true , ()=> (true || false) => true
console.log(!hasCar); // hasCar value is False , NOT operator will convert the answer. ()=> true .
console.log(!hasLicense);//hasLicense value is True , NOT operator will convert the answer. ()=> false .


const driveCar = hasLicense && hasCar

if(driveCar){
    console.log('Sarah can drive');
}else{
    console.log('someOne else should drive')
}