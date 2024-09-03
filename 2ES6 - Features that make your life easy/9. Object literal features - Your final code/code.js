//object literal features
//method definition
const phone = 
{
    ring(i)
    {
        console.log("beep ".repeat(i));
    }
};
phone.ring(4); //beep beep beep beep 

//ES6
//computed property keys
const x = 'make';
function g()
{
    return 'ring';
}
const phone2 = 
{
    [x]: 'Samsung',
    [g()](i)
    {
        console.log("beep ".repeat(i)); 
    }
};
console.log(phone2); //{make: 'Samsung', ring: ƒ}
phone2.ring(8); //beep beep beep beep beep beep beep beep 

//new Object methods: assign
Object.assign(phone2, {warranty: 24});
console.log(phone2); //{make: 'Samsung', warranty: 24, ring: ƒ}