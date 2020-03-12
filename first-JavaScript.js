/*var i;
var cars = new Array();
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

for (i=0;i<cars.length;i++);
{
document.write(cars[i] + "<br>");
}

var x = "It\'s alright";
var y = "He is called \ "Johnny\"";
document.getElementById("demo").innerHTML = x + "<br>" + y; 

var x = "John";
var y = new String("John");

document.getElementById("demo").innerHTML = 
typeof x + " " + typeof y; 

function myFunction()
{
    var x=5+5;
    var y="5"+5;
    var z="Hello"+5;

    var demoP=document.getElementById("demo");
    demoP.innerHTML = x +"<br>" + y + "<br>" + z;
}

function myFunction()
{
    var age,votable;
    age=document.getElementById("age").Value;
    votable=(age<18)?"You're too young":"You're old enough";
    document.getElementById("demo").innerHTML = votable;

}
function myFunction()
{
    var x="";
    var time=new Date().getHours();
    if (time<20)
    {
        x="Good day";
    }
    else
    {
        x="Good evening";
    }
    document.getElementById("demo").innerHTML=x;
} 

var d = new Date();
var time = d.getHours();
if (time<10)
{
    document.write("Good Morning");
}
else if (time>=10 && time<=20)
{
    document.write("Good Day");
}
else 
{
    document.write("Good evening");


var r=Math.random();
var x=document.getElementById("demo")
if (r>0.5)
{
    x.innerHTML="<a href='https://youtu.be/0p6pNWxpCKw'>Watch this vedio</a>"
}
else
{
    x.innerHTML="<a href='https://youtu.be/Tx4nLFGZy_g'>Listen to tis music</a>"
}


function myFunction()
{
    var x;
    var d=new Date().getDay();
    switch (d)
    {
        case 0:
        x="Today it's Sunday";
        break;
        case 1:
        x="Todat it's Monday";
        break;
        case 2:
        x="Today it's Tuesday";
        break;
        case 3:
        x="Today it's Wednesday";
        break;
        case 4:
            x="Today it's Thursday";
            break;
        case 5:
            x="Today it's Friday";
            break;
        case 6:
            x="Today it's Saturday";
            break;
    }
    document.getElementById("demo").innerHTML = x;
}



function myFunction()
{
    var x;
    var d=new Date().getDay();
    switch (d)
    {
        case 6:
            x="Today it's Saturday";
            break;
        case 0:
            x="Today it's Sunday";
            break;
        default:
            x="Looking forward to the Weekend";
    }
    document.getElementById("demo").innerHTML= x;
}
*/

cars=["BMW", "Volvo", "Saab", "Ford"];
for (var i=0;i<cars.length;i++)
{
    document.write(cars[i] + "<br>");
}