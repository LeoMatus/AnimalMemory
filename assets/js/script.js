const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let boardLock = false;
let attempts = 0;
let maxAttempts = 20;
let selectedButton;




document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    restartGame();
    
    //makes the difficulty buttons clickable and it sets the number of attempts each button gives the player.
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

            updateRemainingAttempts(maxAttempts - attempts);

            //adds the selected CSS class to the clicked button
            selectedButton = this;
            this.classList.add("selected");

            restartGame();
        })
    }    
})

/**
 * shows the number of attempts left on the web page
 */
function updateRemainingAttempts(remainingAttempts){   
    document.getElementById("remaining-attempts").innerText = remainingAttempts;
}

/**
 * adds the flip class to the memory-cards which shows the memory card
 */
function cardFlip() {
    if (boardLock) return;
    
    // adds the flip CSS class to the clicked card
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
        updateRemainingAttempts(maxAttempts - attempts);
    }

}

/**
 * Checks if two cards match eachother, disables the cards if they do match. If they dont match it unflips the cards and adds 1 attempt
 */
function checkCardsForMatch() {
    if (firstCard.dataset.image === secondCard.dataset.image){
        //if cards match
        disableMatchingCards();
    } else{
        attempts += 1;
        if(attempts < maxAttempts){
            cardUnflip();
        } else{
            gameOver();
        }
    }  
}

/**
 * makes matching cards unclickable
 */
function disableMatchingCards(){
    firstCard.removeEventListener("click", cardFlip);
    secondCard.removeEventListener("click", cardFlip);
}

/**
 * unflips cards that dont match
 * makes cards clickable again
 */
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

/**
 * makes cards unclickable when max attempt limit is reached
 */
function gameOver(){
    cards.forEach(card => card.removeEventListener('click', cardFlip));
}

/**
 * this function is called when the game needs to restart, both when you refresh the page and when a new difficulty is selected
 * first it resets the number of attempts.
 * Locks the board preventing any clicking on the cards.
 * Flips all the cards so the backside is shown.
 * It shuffles the board.
 * Makes the cards clickable.
 * Sets the new number of max attempts.
 * Disables the board lock.
 * Waits for the flip-animation to finish.
 */
function restartGame(){
    attempts = 0;
    boardLock = true;

    unflipAllCards();

    setTimeout(() =>{
        shuffleBoard();
        activateCards();
        updateRemainingAttempts(maxAttempts);
        boardLock = false;
    },1000);    
}

//makes all the cards flipable
function activateCards(){
    cards.forEach(card => card.addEventListener('click', cardFlip));
}

/**
 * unflips all cards
 */
function unflipAllCards(){
    cards.forEach(card => card.classList.remove("flip"));
}

/**
 * shuffles the cards
 */
function shuffleBoard(){
    cards.forEach (card => {
        let randomPos = Math.floor(Math.random() * 24);
        card.style.order = randomPos;
    });
}