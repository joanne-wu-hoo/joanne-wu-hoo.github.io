// Select all the memory-card elements with document.querySelectorAll
const cards = document.querySelectorAll('.memory-card');

// Initialize variables to handle flipstate
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

let moves = 0;
let counter = document.querySelector(".moves");

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
        // increment move counter
        moves++;
        counter.innerHTML = moves;
        // check for match
        checkForMatch();
    }
}

function checkForMatch(){
    if (firstCard.dataset.name === secondCard.dataset.name){
        // disable event listners
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

function resetGame(){
    // find any flipped over cards and unflip them & add event listener back
    flippedCards = document.querySelectorAll('.flip');
    flippedCards.forEach(card => {
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    });

    // reset board variables
    resetBoard();

    // reset moves counter
    moves = 0;
    counter.innerHTML = moves;  
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
