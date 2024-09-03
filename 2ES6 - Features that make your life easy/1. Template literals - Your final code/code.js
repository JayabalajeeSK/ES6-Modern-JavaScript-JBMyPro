var firstname = 'jaya';
var lastname = 'bala';

//ES5
console.log("Hello " + firstname + " " + lastname + "!"); //use concatenate
//ES6
console.log(`Hello ${firstname} ${lastname}!`); //use placeholder within grave 

//ES5
// var text5 = 'Here is 
// a new line'; //error
var text5 = 'Here is \na new line';
console.log(text5);
//ES6
const text6 = `Here is 
a new line`;
console.log(text6);
// code.js:13 Here is 
// a new line
// code.js:17 Here is 
// a new line