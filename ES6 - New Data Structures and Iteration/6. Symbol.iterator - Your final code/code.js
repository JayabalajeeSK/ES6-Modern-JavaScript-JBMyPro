const basket = ['apple', 'blueberry', 'bread'];
//for of loop
for (const value of basket)
{
    console.log(value);
}
console.log(Symbol.iterator);
console.log(typeof Symbol.iterator);
console.log(basket);
console.log(basket[Symbol.iterator]());
console.log(basket.entries());
// code.js:5 apple
// code.js:5 blueberry
// code.js:5 bread
// code.js:7 Symbol(Symbol.iterator)
// code.js:8 symbol
// code.js:9 Array(3)
// code.js:10 Array Iterator
// code.js:11 Array Iterator
// index.html:46 Live reload enabled.

// const it = basket[Symbol.iterator](); //Cannot redeclare block-scoped variable 'it'
// const it = basket.entries();
// const it = basket.keys();
const it = basket.values();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
let iteration = it.next();
while(!iteration.done)
{
    console.log(iteration.value); 
    iteration = it.next();
}
//create a custom iterator of an object
const obj = {
    *[Symbol.iterator]()
    {
        for(let i = 1; i < 3; i ++)
        {
            yield i;
        }
    }
}
// code.js:33 apple
// code.js:33 blueberry
// code.js:33 bread

const it2 = obj[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
//treat the obj objects as iterable
for(const x of obj)
{
    console.log(x);
}
console.log([...obj]);
// code.js:51 {value: 1, done: false}
// code.js:52 {value: 2, done: false}
// code.js:53 {value: undefined, done: true}
// code.js:57 1
// code.js:57 2
// code.js:59 (2) [1, 2]