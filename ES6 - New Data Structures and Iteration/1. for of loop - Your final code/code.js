//traditional for
for(let i = 0; i < 3; i ++)
{
    console.log(i);
}
//0
//1
//2
for(let i = 0; i < 4; i ++)
{
    if(i == 2) break;
    console.log(i);
}
//0
//1

//forEach
const CARMAKES = ['Audi', 'BMW', 'Ford'];
CARMAKES.forEach((element, index) => 
{
    console.log(`Make ${index + 1}: ${element}`);
});
//Make 1: Audi
//Make 2: BMW
//Make 3: Ford

//ES6 for of:
const CARMAKES1 = ['Audi', 'Benz', 'BMW'];
for (const x of CARMAKES1)
{
    if(x == "BMW") break;
    console.log(x);
}
// Audi
// Benz
const names=["jaya","bala","jb"];
for(const n of names)
{
    console.log(n);
}
// jaya
// bala
// jb