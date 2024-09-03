//why do you need symbols:
// states are fixed , so use const
const OFFSTATE = Symbol('off');
const ONSTATE = Symbol('on');
const feature1 = Symbol('feature');
const feature2 = Symbol('feature');
let car = {
    make: 'Audi',
    [feature1]: 'cruise control',
    [feature2]: 'air-conditionning',
    state: ONSTATE,
    speed: 20,
    turnon()
    {
        this.state = ONSTATE;
    },
    turnoff()
    {
        this.state = OFFSTATE;
    },
    accelerate()
    {
        if(this.state === ONSTATE)
        {
            this.speed += 10;
        }
    }
};
console.log(car); //only one feature is listed
// {make: 'Audi', state: Symbol(on), speed: 20, turnon: ƒ, turnoff: ƒ, …}
// accelerate: ƒ accelerate()
// make: "Audi"
// speed: 20
// state: Symbol(on)
// turnoff: ƒ turnoff()
// turnon: ƒ turnon()
// Symbol(feature): "cruise control"
// Symbol(feature): "air-conditionning"
// [[Prototype]]: Object

//this can be solved by making the object keys unique
car.accelerate();
console.log(car); // speed: 30

// //Symbols are new in ES6. They are primitive type.
const mySymbol = Symbol('Symbol Description');
console.log(mySymbol); // Symbol(Symbol Description)
console.log(mySymbol.toString()); // Symbol(Symbol Description)
// //console.log(mySymbol + 'hello');


const symbol1 = Symbol('a');
const symbol2 = Symbol('a');
console.log(symbol1 === symbol2);//false
console.log(typeof symbol1);//symbol
console.log(Object.keys(car)); //['make', 'state', 'speed', 'turnon', 'turnoff', 'accelerate']
console.log(Object.getOwnPropertyNames(car)); //['make', 'state', 'speed', 'turnon', 'turnoff', 'accelerate']
for (const key in car)
{
    console.log(key);
}
// code.js:60 make
// code.js:60 state
// code.js:60 speed
// code.js:60 turnon
// code.js:60 turnoff
// code.js:60 accelerate

//OwnPropertySymbols
console.log(Object.getOwnPropertySymbols(car)); //[Symbol(feature), Symbol(feature)]