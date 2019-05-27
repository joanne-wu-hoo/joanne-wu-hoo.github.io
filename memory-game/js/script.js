// Select all the memory-card elements with document.querySelectorAll
const cards = document.querySelectorAll('.memory-card');

// Initialize variables to handle flipstate
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

// Function to flip cards & assign firstCard, secondCard
function flipCard(){
    // if lockboard is true OR card is double clicked, return
    if (lockBoard) return;
    if (this === firstCard) return;

    // Access the cards classlist and add "flip" class
    this.classList.add('flip');

    if (!hasFlippedCard){
        // First card clicked
        firstCard = this;
        // Change hasFlippedCard to true
        hasFlippedCard = true;
        return;
    } else {
        // Second card clicked
        secondCard = this;
        // change loackBoard to true
        lockBoard = true;
        checkForMatch();
    }
}

function checkForMatch(){
    if (firstCard.dataset.name === secondCard.dataset.name){
        // disable even listneres
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
        return;
    } else {
        unflipCards();
}

function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
  
      resetBoard();
    }, 1500);
  }
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

// Shuffle cards
(function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.ceil(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();

// Loop through each of these cards and add an event listener on a "click" event to execute "flipCard" function
cards.forEach(function(card){
    card.addEventListener('click', flipCard)
});
