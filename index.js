var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src", "./images/dice"+randomNumber1+".png");

document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src", "./images/dice"+randomNumber2+".png");

if(randomNumber1 === randomNumber2) {
    document.querySelector("body > div > h1").innerHTML = "Draw !";
}
else if(randomNumber1 > randomNumber2) {
    document.querySelector("body > div > h1").innerHTML = "🏆 Player 1 Wins !";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("body > div > h1").innerHTML = "Player 2 Wins! 🏆";
}