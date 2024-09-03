console.log(Math.min(3, 6, 9)); //3
console.log(Math.min([3, 6, 9])); //NaN - in array we dont get correct value

//ES5
//The call() method takes arguments separately.
//The apply() method takes arguments as an array.
console.log(Math.min.apply(null, [3, 1, 8])); //1 //like array with 2 values, 1 is null, another is another nested array , in that array 3 is minimum

//ES6
console.log(Math.max(...[11, 5, 2])); //1 - using ... spread operator
let x = [3, 4, 17];
console.log(Math.max(1, 3, ...x, 16)); //17 - from x array
console.log([1, 3, 6, ...x, 5]); //[1, 3, 6, 3, 4, 17, 5]