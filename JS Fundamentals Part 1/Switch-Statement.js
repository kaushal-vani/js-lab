/*----------------------------------------------------------*Switch Statement*------------------------------------------------------*/
// Switch case is use to deal with reducing the visual complexity of 
// (if , else if and else statement based function block) and uses strict equality operator

// # this is an ideal switch case condition 
const day = "cvgbhn";

switch(day){
    case 'Monday': //day === "Monday"
        console.log("It's Monday");
        break;
    case 'Tuesday':
    case 'Wednesday':
        console.log("It's Tuesday or Wednesday , Who Knows ! ^-^");
        break;
    case 'Thursday':
        console.log("It's Thursday");
        break;
    case 'Friday':
        console.log("It's Friday");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("It's Weekend");
        break;
    default:
        console.log('not a valid answer, enter a valid Day');
}

// If same Scenario is to be handled by a if-else condition 

const dayOfMonth = 'Wednesday';

if(dayOfMonth === 'Monday'){
    console.log("It's Monday");
}
else if (dayOfMonth === 'Tuesday' || 'Wednesday'){
    console.log("It's Tuesday or Wednesday , Who Knows ! ^-^");
}
else if(dayOfMonth === 'Thursday'){
    console.log("It's Thursday");
}
else if(dayOfMonth === 'Friday'){
    console.log("It's Friday");
}
else if (dayOfMonth === 'Saturday' || 'Sunday'){
    console.log("It's Weekend");
}
else{
    console.log('not a valid answer, enter a valid Day');
}

//  It comes down to personal preference to use if-else and Switch-Case . 
// both has it's advantages and dis-advantages . Switch Case are less used compared to If-Else.