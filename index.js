var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

//change dice images according to random numbers we have set in the variables
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  //change title to "Player 1 wins"
  document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
  //change title to "Player 2 wins"
  document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!"
}

else {
  //change title to draw
  document.getElementsByTagName("h1")[0].innerHTML = "Draw!"
}
