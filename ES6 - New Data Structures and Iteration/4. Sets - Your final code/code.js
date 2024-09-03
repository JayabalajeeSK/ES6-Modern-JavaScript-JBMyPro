//a set is an object storing a collection of unique values
let mySet = new Set();
mySet.add('Jaya');
mySet.add(1);
mySet.add(1);//
const phone = { make: 'Samsung',model: 'S8'};
mySet.add(phone);
mySet.add(document.body);
console.log(mySet);
// Set(4) {'Jaya', 1, {…}, body}
// [[Entries]]
// 0:"Jaya"
// 1:1
// 2:Object
// 3:body

////pass an iterable object to the set constuctor
let mySet2 = new Set(['hi', 1, 1, 'Jaya']);
console.log(mySet2); //Set(3) {'hi', 1, 'Jaya'}
let mySet3 = new Set('hello');
console.log(mySet3); //Set(4) {'h', 'e', 'l', 'o'}

//similar methods to Maps
//has - check and return boolean values: true or false
console.log(mySet.has(phone));
console.log(mySet.has({ make: 'Samsung', model: 'S8'}));
console.log(mySet.size);
// mySet.delete(1);
// console.log(mySet);
// mySet.clear();
// console.log(mySet);
// code.js:25 true
// code.js:26 false
// code.js:27 4
// code.js:29 Set(3) {'Jaya', {…}, body}
// code.js:31 Set(0) {size: 0}

//for of loop
for(const value of mySet)
{
    console.log(value);
}
for(const [key, value] of mySet.entries())
{
    console.log(key, value);
}
for(const key of mySet.keys())
{
    console.log(key);
}
for(const value of mySet.values())
{
    console.log(value);
}
// code.js:41 {make: 'Samsung', model: 'S8'}
// code.js:41 <body>​…​</body>​
// code.js:45 Jaya Jaya
// code.js:45 1 1
// code.js:45 {make: 'Samsung', model: 'S8'} {make: 'Samsung', model: 'S8'}
// code.js:45 <body>​…​</body>​ <body>​…​</body>​
// code.js:49 Jaya
// code.js:49 1
// code.js:49 {make: 'Samsung', model: 'S8'}
// code.js:49 <body>​…​</body>​
// code.js:53 Jaya
// code.js:53 1
// code.js:53 {make: 'Samsung', model: 'S8'}
// code.js:53 <body>​…​</body>​

//iteration with forEach
mySet.forEach((value) => 
{
    console.log(value);
});
// code.js:73 Jaya
// code.js:73 1
// code.js:73 {make: 'Samsung', model: 'S8'}
// code.js:73 <body>​…​</body>


//from
//...
const myArray = [...mySet];
console.log(myArray); //(4) ['Jaya', 1, {…}, body]

//Challenge: intersection and difference
//mySet
//mySet2
//intSet
//diffSet
console.log([1,2,3].filter((item) => item > 2));
console.log(mySet);
console.log(mySet2);
// de.js:91 [3]
// code.js:92 Set(4) {'Jaya', 1, {…}, body}
// code.js:93 Set(3) {'hi', 1, 'Jaya'}

//intersection
const intArray = [...mySet].filter((item) => mySet2.has(item));
console.log(intArray);
const intSet = new Set(intArray);
console.log(intSet);
// code.js:100 (2) ['Jaya', 1]
// code.js:102 Set(2) {'Jaya', 1}

//difference
const diffArray = [...mySet].filter((item) => !mySet2.has(item));
console.log(diffArray);

const diffArray2 = [...mySet2].filter((item) => !mySet.has(item));
console.log(diffArray2);

const difftSet = new Set(diffArray.concat(diffArray2));
console.log(difftSet);
// code.js:108 (2) [{…}, body]
// code.js:111 ['hi']
// code.js:114 Set(3) {{…}, body, 'hi'}



