const cards = document.querySelectorAll('.memory-card');

//adds the flip class to the memory-cards
function cardFlip() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', cardFlip));