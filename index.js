
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImg="dice"+randomNumber1+".png";
var randomImageSource="Images/"+randomDiceImg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImg2="dice"+randomNumber2+".png";
var randomImageSource2="Images/"+randomDiceImg2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 wins😁";
}else if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw😎";
}else{
  document.querySelector("h1").innerHTML="Player2 wins🤩";
}
