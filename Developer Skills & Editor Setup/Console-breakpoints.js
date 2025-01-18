// Debugging using Console and Breakpoints

//USING BROWSER CONSOLE
const measureKelvin = function() {
    const measurement ={
        type:'temp',
        unit: 'celsius',
       // C)  FIX
        value: Number(prompt('Degree Celsius: ')),
    };
    //  B) FIND
    console.log(measurement.value);
    // console.log(measurement.value);       => will show as a log in console.
    // console.warn(measurement.value);      => will show as a warning in console.
    // console.error(measurement.value );    => will show as a error in console.
    // console.table(measurement);           => will show the object in form of an table.
    const kelvin = measurement.value + 273; //=> 10273
    return kelvin;
};
//  A) IDENTIFY 
// The prompt window returns us a string , thus the problem

console.log(measureKelvin());

//=> The above problem is solved in the console , as the function is small and easily understandable...
//=> We can also Do the same, using source file and going through it 
// * we can set break point , it will only execute till the break point and wait for futher notice to continue there after

// USING DEBUGGER
const calcTempAmplitudeBug = function(t1,t2){
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for(let i=0; i< temps.length; i++){
        const curTemp = temps[i];
        if(typeof curTemp !=='number')continue;
        if(curTemp>max)max = curTemp;
        if(curTemp<min)min = curTemp;
    }
    console.log(max,min);
    return(max-min);
};

const amplitudeBug = calcTempAmplitudeBug([3,5,1],[9,0,5]);
console.log(amplitudeBug);