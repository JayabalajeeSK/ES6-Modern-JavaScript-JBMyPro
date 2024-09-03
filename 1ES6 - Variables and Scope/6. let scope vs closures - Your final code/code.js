// for(var i = 0; i < 3; i ++)
//     {
//         document.getElementById(i).addEventListener('click', function() //i=0,1,2; click= butoon to click; click call function
//         {
//             console.log(i); //print only 3 for every button
//         })
//     }

// //Solution in ES5: use a closure
// var f = function(x)
// {
//    return function() // return function is closure
//    {
//        console.log(x);
//    }
// }

// for(var i = 0; i < 3; i ++)
//     {
//         document.getElementById(i).addEventListener('click', f(i)) //i=0,1,2; f=3; f(i)-> 3,1; 3,2; 3,0 -> 1,2,0...As per Click
//     }
//     // code.js:5 3
//     // code.js:14 1
//     // code.js:5 3
//     // code.js:14 2
//     // code.js:5 3
//     // code.js:14 0
//     // code.js:5 3
//     // code.js:14 

//Now try with let:

for(let i = 0; i < 3; i++)
    {
    document.getElementById(i).addEventListener('click', function()
    {
        console.log(i); // print button value
    })
}
// code.js:37 1
// code.js:37 2
// code.js:37 0