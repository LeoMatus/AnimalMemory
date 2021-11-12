const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let boardLock = false;
let attempts = 0;
let maxAttempts = 20;
let selectedButton;

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){

            if (this.classList.contains("green")){
                maxAttempts = 20;
            } else if(this.classList.contains("yellow")){
                maxAttempts = 15;
            } else if(this.classList.contains("red")){
                maxAttempts = 10;
            }
            if(selectedButton != undefined){
                selectedButton.classList.remove("selected");
            }

            selectedButton = this;
            this.classList.add("selected");
        })
    }    
})

//adds the flip class to the memory-cards
function cardFlip() {
    if (boardLock) return;
        
    this.classList.toggle('flip');
    
    if (!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;
        firstCard.removeEventListener("click", cardFlip);
    } else{
        //second click
        hasFlippedCard = false;
        secondCard = this;
        console.log(firstCard, secondCard);

        checkCardsForMatch() 
    }

}

function checkCardsForMatch() {
    
    if (firstCard.dataset.image === secondCard.dataset.image){
        //if cards match
        disableMatchingCards();
    } else{
        attempts += 1;
        if(attempts < maxAttempts){
            cardUnflip();
        } else{
            gameOver()
        }
    }  
}

function disableMatchingCards(){
    firstCard.removeEventListener("click", cardFlip);
    secondCard.removeEventListener("click", cardFlip);
}

function cardUnflip() {

    boardLock = true;
    //if cards dont match
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        firstCard.addEventListener('click', cardFlip);
        boardLock = false;
    },2000);
} 

function gameOver(){
    cards.forEach(card => card.removeEventListener('click', cardFlip));
    console.log("game over");
}

//function restartGame{
    //unflip cards

    //shuffle cards

    //add event handler
//}

(function shuffleBoard(){
    cards.forEach (card => {
        let randomPos = Math.floor(Math.random() * 24);
        card.style.order = randomPos;
    });
})();


cards.forEach(card => card.addEventListener('click', cardFlip));