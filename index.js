let randomNumber1 = Math.floor(Math.random()*3)+1;
let randomImageSrc = "images/pic" + randomNumber1 + ".png";
let image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc);


let randomNumber2 = Math.floor(Math.random()*3)+1;
let randomImageSrc2 = "images/pic" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

let play = document.querySelector("button");


if (randomNumber1==1 && randomNumber2==2){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else if (randomNumber1==1 && randomNumber2==3){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (randomNumber1==2 && randomNumber2==1){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (randomNumber1==2 && randomNumber2==3){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}    
else if (randomNumber1==3 && randomNumber2==1){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else if (randomNumber1==3 && randomNumber2==2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
} 
else{
    document.querySelector("h1").textContent = "It's a TIE!";
}

play.onclick = function playAgain(){
    location.reload();
};


