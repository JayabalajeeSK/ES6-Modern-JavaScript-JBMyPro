const x = [5, 7, , 2];
//find the first element greater than 6
console.log(x) //(4) [5, 7, empty, 2]
console.log(x.find(value => value > 6)); //7
console.log(x.findIndex(value => value > 6)); //1

//find the first element which if added to its index, the sum is smaller than 5
console.log(x.find((value, index) => value + index < 6)); //5 //1:+ 2:< ; 5+0=5

//get the index of a value
console.log(x.indexOf(7)); //1

//check if a value exists
console.log(x.includes(2)); //true

//copy in position 1 the chunk between 0 and 1
console.log(x); //(4) [5, 7, empty, 2]

x.copyWithin(1, 0, 2); // (copy element to, copy element from, last index)
console.log(x); //(4) [5, 5, 7, 2]

//copy in position 2 the chunk between 1 and the end
x.copyWithin(2, 1); 
console.log(x); //[5, 5, 5, 7]

//copy in position 3 the first value of the array
x.copyWithin(3); 
console.log(x); //(4) [5, 5, 5, 5]

//fill x with 4's from position 1 to 2
x.fill(4, 1, 3);
console.log(x); // (4) [5, 4, 4, 5]

//fill x with {name:'Mark'} from position 2 to the end
// const y = {name:'Mark'};
x.fill({name:'Mark'}, 2);
console.log(x); //(4) [5, 4, {name: 'Mark'}, {name: 'Mark'}}]

//check if values x[2] and x[3] are equal
console.log(x[2] === x[3]);//true ; because you are passing a reference only
// console.log({name:'Mark'} === {name:'Mark'});