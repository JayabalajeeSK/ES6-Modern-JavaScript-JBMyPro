//Why do you need to create arrays from other objects?
let arr = [1, 2, 3];
console.log(arr.map(x => x * 2));
let str = 'hello';
console.log(arr.map);
console.log(str.map);
// (3) [2, 4, 6]
// map() { [native code] }

//ES5
console.log(Array.prototype.map.call(str, function(x)
{
    return x + 'a';
}));
// (5) ['ha', 'ea', 'la', 'la', 'oa']

const collection = document.getElementsByClassName('blue'); // 3 classes
console.log(collection.length); //3
console.log(collection); //HTMLCollection(3) [div.blue, div.blue, div.blue]
console.log(collection.slice); //undefined

//ES5:
console.log(Array.prototype.slice.call(collection, 1, 3));//(2) [div.blue, div.blue]

//////////////////////////////////ES6
//Create an array from a collection
console.log(Array.from(collection)); // [div.blue, div.blue, div.blue]
//Create an array from a string
console.log(Array.from(str));//['h', 'e', 'l', 'l', 'o'] 

//Create an array from function arguments
function g(x, y)
{
    console.log(arguments); // Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(Array.from(arguments)); // (2) [1, 2]
}
g(1, 2);

//use the optional map function
let str2 = 'strawberry';
console.log(Array.from(str2, x => x + ',')); //(10) ['s,', 't,', 'r,', 'a,', 'w,', 'b,', 'e,', 'r,', 'r,', 'y,']
console.log(Array.from([1, 2, 3], x => x * 2)); //(3) [2, 4, 6]

//from any object with a length property
const obj = {length: 3};
console.log(Array.from(obj)); //[undefined, undefined, undefined]
console.log(Array.from(obj, value => 1)); //(3) [1, 1, 1]
console.log(Array.from(obj, (value, index) => index * 2)); //(3) [0, 2, 4]

//create an array from Sets and Maps (iterable objects)
let mySet = new Set();
mySet.add('Jaya');
mySet.add(1);
console.log(mySet); // Set(2) {'Jaya', 1}
console.log(mySet.size); // 2
console.log(Array.from(mySet)); // (2) ['Jaya', 1]

const myMap = new Map([[1,2], [3,4]]);
console.log(myMap);
console.log(Array.from(myMap));
// (2) [Array(2), Array(2)]
// 0: (2) [1, 2]
// 1: (2) [3, 4]
// length: 2
// [[Prototype]]: Array(0)












