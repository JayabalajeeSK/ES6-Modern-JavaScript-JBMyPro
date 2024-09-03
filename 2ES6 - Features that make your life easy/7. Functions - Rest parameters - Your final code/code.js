//ES5
function printAll()
{
    var arr = [];
    for (var i = 0; i < arguments.length; i++) //argument- values inside () in function 
    {
        arr.push(arguments[i]);
    }
    return arr;
}
console.log(printAll(1, 2)); //[1,2]

//ES6 using rest parameters
function printAll2(x, ...y) //without x, execute rest of the parameters arguments(..y)
{
    console.log(x); // it is skipped
    console.log(y); // rest y parameters argument id executed
}
printAll2(2,3,4,5,6,7,8); //[3, 4, 5, 6, 7, 8]

//function pcheck firstname, lastname, 
//Passenger: firstname lastname
//Belongings: item1, item2, item3, ...

//ES6
function pCheck(firstname, lastname, ...items)
{
    const belongings = items.length>0 ? items : 'none';
    console.log(`Passenger: ${firstname} ${lastname}, Belongings: ${belongings}`);
}
pCheck('jaya', 'bala', 'Bag', 'Suitcase'); //Passenger: jaya bala, Belongings: Bag,Suitcase
pCheck('tharun', 'bala'); //Passenger: tharun bala, Belongings: none - Default Value

// //ES5
function pCheck2(firstname, lastname)
{
    console.log(arguments);
    var z = Array.prototype.slice.call(arguments,2); // creating new array from arguments after 2 arguments
    var belongings = z.length > 0 ? z : 'none';
    console.log('Passenger: ' + firstname + ' ' + lastname + '\n' + 'Belongings: ' + belongings);
}
pCheck2('jaya', 'bala', 'BackPack', 'Suitcase'); //Passenger: jaya bala  Belongings: BackPack,Suitcase; 'BackPack', 'Suitcase' - bellong to z array 
pCheck2('jaya', 'bala'); //Passenger: jaya bala  Belongings: none