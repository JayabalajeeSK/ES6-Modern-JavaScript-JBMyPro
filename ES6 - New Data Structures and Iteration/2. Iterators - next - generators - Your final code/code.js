const BASKET = ['strawberry', 'apple', 'yogurt', 'bread'];
for(const x of BASKET) //iteration
{
    console.log(x);
}
// code.js:4 strawberry
// code.js:4 apple
// code.js:4 yogurt
// code.js:4 bread
//BASKET is iterable

//an iterator
//next() -> {value: , done: }
// //built in method creating an iterator out of an array
// let arrIt = BASKET.entries(); //Returns an iterable of key, value pairs for every entry in the array
const arrIt = BASKET.values();
// //let arrIt = BASKET.keys();
console.log(arrIt);
console.log(JSON.stringify(arrIt.next())); //Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));

// code.js:18 Array Iterator {}
// code.js:19 {"value":"strawberry","done":false}
// code.js:20 {"value":"apple","done":false}
// code.js:21 {"value":"yogurt","done":false}
// code.js:22 {"value":"bread","done":false}
// code.js:23 {"done":true}

//let's create a function that makes an iterator out of an array
const createIterator = array => 
{
    let index = 0;
    return{
        next()
        {
            if(index < array.length)
                {
                    return{
                        value: array[index++], done: false
                    }
                }
                else
                {
                    return{
                        done: true
                    }
                }
        }
    };
};

const arrIt2 = createIterator([1,2,3]);
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());

// code.js:49 {value: 1, done: false}
// code.js:50 {value: 2, done: false}
// code.js:51 {value: 3, done: false}
// code.js:52 {done: true}

//generator functions: factory of iterators

function* genIterator(){
    console.log('running');
    yield 1; //pause generator
    console.log('running');
    yield 2;
}
const it = genIterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
// code.js:58 running
// code.js:64 {value: 1, done: false}
// code.js:60 running
// code.js:65 {value: 2, done: false}
// code.js:66 {value: undefined, done: true}
// code.js:67 {value: undefined, done: true}
// code.js:68 {value: undefined, done: true}

