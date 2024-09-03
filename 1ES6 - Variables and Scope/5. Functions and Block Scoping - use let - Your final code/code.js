// //create a separate scope first using a block
// {
//    greet();//hi========1
//    function greet()
//    {
//        console.log('hi');
//    }
//    greet();//hi============2 
//    {
//        function greet()
//        {
//            console.log('hello');
//        }
//        greet();//hello===============3  
//    }
//    greet();//hi===========4
// }
// greet();//hello===========5
// // code.js:6 hi
// // code.js:6 hi
// // code.js:13 hello
// // code.js:6 hi
// // code.js:13 hello

let greet = function()
{
    console.log('hi2');
}
greet();//hi2===============1
{
    let greet = function()
    {
        console.log('hello2');
    }
    greet();//hello2==========2
    
    {
        let greet = function()
        {
            console.log('hi there');
        }
    }
}
greet();//hi2============3
{
    let greet = function(){
        console.log('hi hello');
    }
}
greet();//hi====================4
//when we use let the function call to function declare with let which outside the block, not call the preceding function in the block
// code.js:27 hi2
// code.js:33 hello2
// code.js:27 hi2
// code.js:27 hi2
