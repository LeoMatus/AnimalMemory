const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;


//adds the flip class to the memory-cards
function cardFlip() {
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

        if (firstCard.dataset.image === secondCard.dataset.image){
            //if cards match
            firstCard.removeEventListener("click", cardFlip)
            secondCard.removeEventListener("click", cardFlip)
        }
    }
}

cards.forEach(card => card.addEventListener('click', cardFlip));