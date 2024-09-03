//ES6
const person = {name: 'Jaya', age: 21};
const {name: n, age: a} = person;
console.log(n, a); // Jaya 21

//deep matching
const {country: c, address:{postcode: p, housenumber: hn}} = {country: 'India', address:{postcode: '603002', housenumber: 6}}; // need to refer object ; use = and the refernce variable to assign values
console.log(c, p, hn); //india 603002 6

//same as {name:name, age:age} no need of reference variable
const {name, age} = person;
console.log(name, age); //jaya 21

//default values
const obj = {country: 'India'}
const {city = 'Vellore', country} = obj; // taking city from default values
console.log(city, country); //Vellore India

// // ES5
// if(obj.city === undefined){}else{}

function processString(x)
{
    return {value: x, length: x.length}
}
const {value, length} = processString('jaya');
console.log(value, length); //jaya 4
