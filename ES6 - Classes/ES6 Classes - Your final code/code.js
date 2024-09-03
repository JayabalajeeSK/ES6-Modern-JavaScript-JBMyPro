// //ES5
// //Superclass
// function phone(make, model, warranty, colour)
// {
//     this.make = make;
//     this.model = model;
//     this.warranty = warranty || 24; // default values
//     this.colour = colour || 'white';
// }
// phone.prototype = 
// {
//     extendWarranty: function(x)
//     {
//         this.warranty += x;
//     }  
// };
// //Subclass
// function smartPhone(make, model, OS)
// {
//     this.make = make;
//     this.model = model;
//     this.OS = OS;
//     //phone.call(this, make, model)
// }
// smartPhone.prototype = new phone('Samsung', 'S6');
// //smartPhone.prototype = Object.create(phone.prototype);
// smartPhone.prototype.constructor = smartPhone;

// var mySmartphone = new smartPhone('Apple', 'iphone 7', 'IOS 10');
// console.log(mySmartphone); // smartPhone {make: 'Apple', model: 'iphone 7', OS: 'IOS 10'}
// console.log(mySmartphone.extendWarranty);
// // ƒ(x)
// // {
// //     this.warranty += x;
// // }
// mySmartphone.extendWarranty(3);
// console.log(mySmartphone); // smartPhone {make: 'Apple', model: 'iphone 7', OS: 'IOS 10', warranty: 27} //default=24


//ES6
class phone6{
    constructor(make, model, _warranty, colour)
    {
        this.make = make;
        this.model = model;
        this._warranty = _warranty || 24;
        this.colour = colour || 'white';
        this.log = [];
    }
    extendWarranty(x)
    {
        this.warranty += x;
    }
    
    //static method - missing in ES5
    static defaultPhone()
    {
        return new phone6('Apple', 'iphone 6');
    }
    
    //setter
    set warranty(x)
    {
        this.log.push(`warranty set to ${x}`);
        this._warranty = x;
    }
    
    //getter
    get warranty()
    {
        console.log(`get warranty called`);
        return this._warranty;
    }
}
const myPhone6 = new phone6('Apple', 'Iphone7', 11, 'black');
console.log(myPhone6);// phone6 {make: 'Apple', model: 'Iphone7', _warranty: 11, colour: 'black', log: Array(0)}

console.log(typeof phone6);//function

//static methods not attached to class instances
console.log(myPhone6.defaultPhone);// undefined

console.log(phone6.defaultPhone);
// ƒ defaultPhone()
//     {
//         return new phone6('Apple', 'iphone 6');
//     }
console.log(phone6.defaultPhone()); // phone6 {make: 'Apple', model: 'iphone 6', _warranty: 24, colour: 'white', log: Array(0)}
console.log(Object.create); //ƒ create() { [native code] }
const obj = {name: 'Jaya'};
console.log(obj.create); //undefined


//setters and getters
myPhone6.warranty = 30;//calls the setter
myPhone6.warranty = 40;//calls the setter
myPhone6.warranty = 30;//calls the setter
console.log(myPhone6.warranty);//30 //calls the getter
console.log(myPhone6.log);// (3) ['warranty set to 30', 'warranty set to 40', 'warranty set to 30']


//inheritance - extends - super
class smartPhone6 extends phone6
{
    constructor(make, model, OS)
    {
        super(make, model);
        this.OS = OS;
    }
    extendWarranty(x)
    {
        super.extendWarranty(x);
    }
}

const mySmartPhone6 = new smartPhone6('Apple', 'Iphone 7', 'IOS 11');
console.log(mySmartPhone6);
// smartPhone6 {make: 'Apple', model: 'Iphone 7', _warranty: 24, colour: 'white', log: Array(0), …}
mySmartPhone6.extendWarranty(10);
console.log(mySmartPhone6);
//smartPhone6 {make: 'Apple', model: 'Iphone 7', _warranty: 34, colour: 'white', log: Array(1), …}
console.log(mySmartPhone6 instanceof smartPhone6);//true
console.log(mySmartPhone6 instanceof phone6);//true