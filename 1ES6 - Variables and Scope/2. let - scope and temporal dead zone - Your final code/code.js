//ES6
//let x = 1;
//redeclaration throws an error unlike var
//scope
let x = 1;
function add(y)
{
    return y + x;
}
console.log(add(3));//4
//so let variables can be accessed from inside functions if declared in their outer environment just like var
function add2(y)
{
    let x = 2;
    return y + x;
}
console.log(add2(3));//5
//hoisting
//console.log(z); // reference error: Cannot access 'z' before initialization
//temporal dead zone
let z;
console.log(z); //undefined
z = 1;
console.log(z); //1