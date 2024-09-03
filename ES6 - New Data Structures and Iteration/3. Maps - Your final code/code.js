const CAR = { make: 'Toyota', model: 'Yaris'}; //object
for (key in CAR)
{
    console.log(key);//order not guaranteed // make model
}
console.log(typeof CAR.forEach);//undefined

// Example 1
let myMap1 = new Map([[1,2],[3,4]]); //[key,value] map - object
console.log(myMap1);
// type
console.log(typeof myMap1);//object
console.log(myMap1.delete(1));//return true if successful
console.log(myMap1);
myMap1.clear();
console.log(myMap1);
// code.js:10 Map(2) {1 => 2, 3 => 4}[[Entries]]No propertiessize: 0[[Prototype]]: Map
// code.js:12 object
// code.js:13 true
// code.js:14 Map(1) {3 => 4}[[Entries]]No propertiessize: 0[[Prototype]]: Map
// code.js:16 Map(0) {size: 0}

//Example 2
const [x, y, z] = [1, NaN, 3];
const LANGUAGE = { name: 'JavaScript', version: 'ES6'};
const add = (x, y) => x + y;
const str1 = "build interactive websites";
const str2 = "NaN is not equal to itself, but this changes when it comes to Maps";
const arr = [2, 3];

let myMap2 = new Map();
console.log(myMap2);

//set key values
myMap2.set(x, z);
console.log(myMap2);

myMap2.set(LANGUAGE, str1);
console.log(myMap2);

myMap2.set(add, arr);
console.log(myMap2);

myMap2.set(y, str2);
console.log(myMap2);
// code.js:32 Map(0) {size: 0}
// code.js:36 Map(1) {1 => 3}
// code.js:39 Map(2) {1 => 3, {…} => 'build interactive websites'}
// code.js:42 Map(3) {1 => 3, {…} => 'build interactive websites', ƒ => Array(2)}
// code.js:45 Map(4) {1 => 3, {…} => 'build interactive websites', ƒ => Array(2), NaN => 'NaN is not equal to itself, but this changes when it comes to Maps'}

//get values/check if they exist
console.log(myMap2.get(x));
console.log(myMap2.has(1));
console.log(myMap2.get(LANGUAGE));
console.log(myMap2.has({ name: 'JavaScript', version: 'ES6'}));//objects are not equal
// code.js:53 3
// code.js:54 true
// code.js:55 build interactive websites
// code.js:56 false
console.log(myMap2.get(y));
console.log(myMap2.get(NaN));
console.log(y === NaN);//NaN is not equal to itself but this changes when it comes to Maps.
// code.js:61 NaN is not equal to itself, but this changes when it comes to Maps
// code.js:62 NaN is not equal to itself, but this changes when it comes to Maps
// code.js:63 false

//iteration with for of
for (const [key, value] of myMap2)
{
    console.log(`Key: ${key} -> Value: ${value}`);
}
// code.js:71 Key: 1 -> Value: 3
// code.js:71 Key: [object Object] -> Value: build interactive websites
// code.js:71 Key: (x, y) => x + y -> Value: 2,3
// code.js:71 Key: NaN -> Value: NaN is not equal to itself, but this changes when it comes to Maps

//forEach
myMap2.forEach((key, value) => 
{
    console.log(`Key: ${key} -> Value: ${value}`);
});
// code.js:81 Key: 3 -> Value: 1
// code.js:81 Key: build interactive websites -> Value: [object Object]
// code.js:81 Key: 2,3 -> Value: (x, y) => x + y
// code.js:81 Key: NaN is not equal to itself, but this changes when it comes 

//iterator
//const k = myMap.entries();
const k = myMap2.keys();
//const k = myMap.values();
console.log(k);
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
// code.js:92 MapIterator {1, {…}, ƒ, NaN}
// code.js:93 {value: 1, done: false}
// code.js:94 {value: {…}, done: false}
// code.js:95 {done: false, value: ƒ}
// code.js:96 {value: NaN, done: false}
// code.js:97 {value: undefined, done: true}




