var randomNumber1 = Math.floor(Math.random()*6)+1;
var image1address = "images/dice"+randomNumber1+".png";


document.querySelectorAll("img")[0].setAttribute("src", image1address);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var image2address = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", image2address);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 won"
}else if(randomNumber1<randomNumber2){ 
    document.querySelector("h1").innerHTML = "Player 2 won"
}else{
    document.querySelector("h1").innerHTML = "Draw!!!!";
}