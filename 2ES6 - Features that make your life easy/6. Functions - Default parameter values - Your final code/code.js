//ES5
function increment(x, y)
{
    return (y == undefined)? (x + 1): (x + y); //if y is undefined the assign y=1, then add x and y (x+y)
}
console.log(increment(5)); //6
console.log(increment(5, 3)); //8 

//ES6
const increment2 = (x, y = 1) => x + y; //if y is undefined the assign y=1, then add x and y (x+y)
console.log(increment2(4)); //5
console.log(increment2(8, 3)); //11

//using destructuring with array
function greet([firstname, lastname = 'balajee'])
{
    console.log(`hello ${firstname} ${lastname}`)
};
greet(['jaya']); //hello jaya balajee
greet(['jaya','bala']); //hello jaya bala
greet(['tharun']); //hello tharun balajee

//using destructuring with object
function addup({item = 'bananas', price = 0, quantity = 0} = {})
{
    console.log(`Please pay Rs.${price * quantity} for ${quantity} ${item}`);
}
addup({item: 'bananas', price: 10, quantity: 5}); //Please pay Rs.50 for 5 bananas
//only work when we have all default values
addup({}); //Please pay Rs.0 for 0 bananas // returns Default 
addup(); //Please pay Rs.0 for 0 bananas // return default