/*------------------------------------------------------------*Operator precedence*------------------------------------------------------------*/

/*
Operator precedence describes the order in which operations are performed in an arithmetic expression.
Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
*/

// execution of code will either happen from( left to right ) or ( right to left ) based on it sprecedence 
// the execution of code will happen based on the precedence value that is given to each operator. 
let x,y;
x = y = 25-10-5;
console.log(x,y);
//=> based on the precedense , subtraction will execute followed by ( = ).
// answer wil be x = y = 10 🧾

//precedence of Grouping
const a = 10;
const b = 25;
const average = (a+b)/2;
console.log(average)
//=> based on the precedense , grouping will execute first, followed by ( / ) division.
// answer wil be x = y = 10 🧾


/*
Postfix operators (all have the same precedence, so sequences of operators will be evaluated left-to-right)
array subscript operator []
function call operator ()
component selection operators . and ->
postfix ++ and --
Unary operators (all have the same precedence, so sequences of operators will be evaluated left-to-right)
prefix ++ and --
sizeof
bitwise negation operator ~
logical negation operator !
unary sign operators - and +
address-of operator &
dereference operator *
Cast expressions ( type name )
Multiplicative operators *, /, %
Additive operators + and -
Shift operators << and >>
Relational operators <, >, <=, >=
Equality operators == and !=
Bitwise AND &
Bitwise XOR ^
Bitwise OR |
Logical AND &&
Logical OR ||
Conditional operator ?:
Assignment operators =, +=. -=, *=, /=, %=, <<=, >>=, &=, ^=, |=
Sequential (comma) operator ,
*/