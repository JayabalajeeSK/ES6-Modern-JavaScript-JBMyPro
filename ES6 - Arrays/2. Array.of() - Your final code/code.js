//create an array of 1 element
const x = Array.of(3); //add 1 element (3) to array, length=1
console.log(x); //[3]

//create an array of 3 element
const y = Array.of(3, 4, 9); //add 3 elements (3,4,9) to array, length=3
console.log(y); //(3) [3, 4, 9]

//Please don't mix this with the Array constructor
let z = new Array(3); // empty array with length of 3
console.log(z); //(3) [empty × 3] //array with 3 empty slots
