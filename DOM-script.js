var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var divEl = document.createElement("div");
var imgEl = document.createElement("img");
var h3El = document.createElement("h3");
var h4El = document.createElement("h4");
var ulEl = document.createElement("ul");
var liEl1 = document.createElement("li");
var liEl2 = document.createElement("li");


h1El.textContent = "Welcome to JavaScript World!";
h2El.textContent = "I like cats.";
h3El.textContent = "This is a cute cat.";
h4El.textContent = "His name is Oscar.";
liEl1.textContent = "Hot Pot";
liEl2.textContent = "BBQ";

document.body.appendChild(h1El);
document.body.appendChild(h2El);
document.body.appendChild(divEl);
divEl.appendChild(imgEl);
divEl.appendChild(h3El);
divEl.appendChild(h4El);
document.body.appendChild(ulEl);
ulEl.appendChild(liEl1);
ulEl.appendChild(liEl2);


h1El.setAttribute("style","color:orange;text-align:center;");
h2El.setAttribute("style","color:pink;text-align:center;");
divEl.setAttribute("style","text-align:center;");
imgEl.setAttribute("src", "https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg");
imgEl.setAttribute("alt","A cute cat");
imgEl.setAttribute("height","50%");
h3El.setAttribute("style","font-size:30px;text-align:center;");
h4El.setAttribute("style","font-size:30px;text-align:center;");




