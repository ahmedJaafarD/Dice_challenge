var number = 0;
var randomNumber;
var randomNumber2;

randomNumber = Math.floor(Math.random() * 6) +1;
randomNumber2 = Math.floor(Math.random() * 6) +1;

var img1 = "dices." + randomNumber + ".png";
var img2 = "dices." + randomNumber2 + ".png";

var string1 = "./images/" + img1;
var string2 = ("./images/" +img2);

document.querySelector(".img1").setAttribute("src",string1);

document.querySelector(".img2").setAttribute("src",string2);


if(randomNumber > randomNumber2){

    document.querySelector("h1").innerHTML="player 1 win";
}
if (randomNumber < randomNumber2){

    document.querySelector("h1").innerHTML="player 2 win";
}
if(randomNumber === randomNumber2){

    document.querySelector("h1").innerHTML="two loosers";
}

