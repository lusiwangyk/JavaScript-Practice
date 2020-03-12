/*function myFunction()
{
    var x="", i=0;
    while(i<5)
    {
        x=x + "The number is " + i + "<br>";
        i++;
    }
    document.getElementById("demo").innerHTML= x;
}

function myFunction()
{
    var x=","i=0;
    for (i=0;i<10;i++)
    {
        if (i==3)
        {
        continue;
        }
    x=x + "The number is " + i +"<br>";
    }
document.getElementById("demo").innerHTML = x;
}

document.getElementById("demo").innerHTML = 
    typeof "john" + "<br>" +
    typeof 3.14 + "<br>" +
    typeof NaN + "<br>" +
    typeof false + "<br>" +
    typeof [1,2,3,4] + "<br>" +
    typeof {name:'john', age:34} + "<br>" +
    typeof new Date() + "<br>" +
    typeof myCar + "<br>" +
    typeof null;


var fruits = ["Apple", "Orange", "Banana", "Mango"];
document.getElementById("demo").innerHTML = isArray(fruits);

function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}


var x = 123;
document.getElementById("demo").innerHTML = 
    String(x) + "<br>" +
    String(123 ) + "<br>" +
    String(100 + 23);

var x = 123;
document.getElementById("demo").innerHTML = 
    x.toString() + "<br>" +
    (123).toString() + "<br>" +
    (100 + 23).toString();

*/

function myFunction() {
    var y = "john";
    var x = + y;
    document.getElementById("demo").innerHTML = 
    typeof x + "<br>" + x;

}
