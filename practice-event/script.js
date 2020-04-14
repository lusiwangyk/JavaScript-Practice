var calculate = document.querySelector("#submit");
var mealSum = document.querySelector("#meal");
var percentage = document.querySelector("#tip");
var tipSum = document.querySelector("#tip-amount");
var newTotal = document.querySelector("#new-total");


calculate.addEventListener("click", function(event){
    event.preventDefault();
    console.log(event);

    var tip = mealSum.value * percentage.value;

    console.log(tip);
    tipSum.textContent = tip;

    console.log(typeof mealSum.value);

    var bill = parseInt(mealSum.value)
    var total = bill + tip;

   
    console.log(typeof total);
    newTotal.textContent = total;

    var people = document.querySelector("#people");
    var share = document.querySelector("#share");
    var newBill = document.querySelector("#new-amount");

    share.addEventListener("click",function(event){
    event.preventDefault();
    console.log(event);
    
    var newNum = total/people.value;
    console.log(typeof people);
    var n =newNum.toFixed(2);

    console.log(n);
    console.log(typeof n);

    newBill.textContent = n;

})

})


