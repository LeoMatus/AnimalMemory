const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let borardLock = false;


//adds the flip class to the memory-cards
function cardFlip() {
    if (borardLock) return;
        
    this.classList.toggle('flip');

    if (!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;
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
        cardUnflip();
    }  
}

function disableMatchingCards(){
    firstCard.removeEventListener("click", cardFlip);
    secondCard.removeEventListener("click", cardFlip);
}

function cardUnflip() {

    borardLock = true;
    //if cards dont match
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        borardLock = false;
    },2000);
} 


cards.forEach(card => card.addEventListener('click', cardFlip));