//create an empty array. 
//Using a for loop insert three functions logging their corresponsing index inside the array.
//provide the solution in both ES5 and ES6

//ES6 (easiest)
let cars = [];
for(let i = 0; i < 4; i ++)
{
    cars[i] = function()
    {
        console.log(i);
    };
}
cars[1]();
cars[0]();
cars[3]();
// code.js:11 1
// code.js:11 0
// code.js:11 3

/////////////////////////////////////////////////
//ES5
var bikes = [];
function f(x)
{
    return function()
    {
        console.log(x);
    };
}
for(var i = 0; i < 4; i ++)
{
    bikes[i] = f(i);
}
bikes[3]();
bikes[1]();
bikes[2]();
// code.js:28 3
// code.js:28 1
// code.js:28 2