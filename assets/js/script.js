const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let boardLock = false;
let attempts = 0;
let maxAttempts = 2;


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

    if(attempts === maxAttempts){
        gameOver()
    }
}

function checkCardsForMatch() {
    
    if (firstCard.dataset.image === secondCard.dataset.image){
        //if cards match
        disableMatchingCards();
    } else{
        if(attempts != maxAttempts)
        attempts += 1;
        cardUnflip();
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
    boardlock = true;
    console.log("game over");
}

(function shuffleBoard(){
    cards.forEach (card => {
        let randomPos = Math.floor(Math.random() * 24);
        card.style.order = randomPos;
    });
})();


cards.forEach(card => card.addEventListener('click', cardFlip));