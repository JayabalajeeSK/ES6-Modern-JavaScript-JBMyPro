//ES5
var x = 1;
var y = 2;

//ES6
const [a, b] = [3, 4];
console.log(a); //3
console.log(b); //4

//process return values in array format
function processString(x)
{
    return [x, x.length];
}

console.log(processString('jaya ')); //['jaya',5]

// //result
// value = result.value
// length = result.length

const [value, length] = processString('jaya'); //without whitespace
console.log(value); //jaya
console.log(length); //4

//swap values of two variables
var c = 1;
var d = 2;
// ES5
var e = c; //e=1
c = d; //c=2
d = e; //d=1
console.log(c, d); //2 1

// ES6 - for swaping we don't nee the temparary variable
let [p, q] = [6, 3];
console.log(p,q);
[p, q] = [q, p]; 
console.log(p,q); // 3 6

//ES6 
//default values
let list = ['London', 'England'];
let list1 = ['London'];
let [city, country = 'USA'] = list1;
console.log(city, country); //London USA // using default value for country in list1

// //ES5
var city1 = list[0];
var country1 = list[1] === undefined ? 'USA' : list[1]; //list[1] is defined - England
console.log(city1, country1); //London England