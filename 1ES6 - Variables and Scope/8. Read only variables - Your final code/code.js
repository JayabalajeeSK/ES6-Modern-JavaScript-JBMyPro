//const MAKE; 
const MAKE = 'Apple';
console.log(MAKE); //Apple
{
    const MAKE = 'Apple';
}
{
    const MAKE = 'Samsung';// can't change to const variable
}
const LANGUAGE = 
{
    name: 'JavaScript',
    version: 'ES5'
}
LANGUAGE.version = 'ES6'; // can change the value of any property in const object
console.log(LANGUAGE.version) //ES6
//error only if you do LANGUAGE = something
//use const when the variable that don't change