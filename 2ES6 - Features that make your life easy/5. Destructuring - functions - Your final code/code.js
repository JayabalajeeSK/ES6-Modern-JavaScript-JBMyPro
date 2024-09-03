//ES5
function f(arr)
{
    console.log('hello ' + arr[0] + ' ' + arr[1]);
}
f(['jaya', 'bala']); //hello jaya bala

//ES6
//parameter matching - array
function g([firstname, lastname])
{
    console.log(`hello ${firstname} ${lastname}!`);
}
g(['jaya', 'balajee']); //hello jaya balajee!

//property matching - object
function h({firstname, lastname})
{
    console.log(`hello ${firstname} ${lastname}!`);
}
h({firstname: 'tharun', lastname: 'balajee'}); //hello tharun balajee!