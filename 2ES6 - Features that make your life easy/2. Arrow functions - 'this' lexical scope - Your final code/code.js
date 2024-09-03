//ES5
document.getElementById('button1').addEventListener('click', function()
{
    console.log('ES5');
});

//ES6
document.getElementById('button2').addEventListener('click', () => 
{
    console.log('ES6');
});
//////////////////////////////////////////////////////////
var list = [1, 3];
//ES5
var list1 = list.map(function(x) // map function to each element in array
{
    return x * 2; 
});
console.log(list1); //[2,6]

//ES6
const list2 = list.map(x => 
{
    return x + 2;
});
console.log(list2); //[3,5]

const list3 = list.map(x => x * 8);
console.log(list3); //[8,24]
/////////////////////////////////////////////////////////

//this -- means Object we used
//ES5
document.getElementById('button3').addEventListener('click', function()
{
    console.log(this.innerHTML); // this -> button3 --> window object -> DOM
});

//ES6
document.getElementById('button4').addEventListener('click', () => 
{
    console.log(this.innerHTML);//undefined -> elastic scope to the function // this -> button4 -> window object ->DOM
});

//Another example:
//ES5
var player5 = 
{
    name: 'jaya',
    click: function()
    {
        var player = this; // this -> player5 object 
        document.getElementById('button5').addEventListener('click', function()
        {
            console.log(player.name);
        });
    }
};
player5.click(); //jaya

//ES6
var player6 = 
{
    name: 'bala',
    click: function() 
    {
        document.getElementById('button6').addEventListener('click', () => 
        {
            console.log(this.name);
        });
    }
};
player6.click(); //bala