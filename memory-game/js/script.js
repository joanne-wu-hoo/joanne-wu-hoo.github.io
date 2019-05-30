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
    }, 1000);
  }
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

function shuffle(){
    // lock board while shuffling
    lockBoard = true;

    // shuffle cards
    cards.forEach(card => {
        let randomPos = Math.ceil(Math.random() * 12);
        card.style.order = randomPos;
    });

    // unlock board
    lockBoard = false;
}

function resetGame(){
    // deactivate cards
    deactivateCards();

    // find any flipped over cards and unflip them & add event listener back
    flippedCards = document.querySelectorAll('.flip');
    flippedCards.forEach(card => {
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    });

    // reset moves counter
    moves = 0;
    counter.innerHTML = moves;  

    lockBoard = true;
    // shuffle cards
    setTimeout(()=>{
        shuffle();
        activateCards();
    },1010);

    // reset board variables
    resetBoard();
}


// Loop through each of these cards and add an event listener on a "click" event to execute "flipCard" function
function activateCards(){
    cards.forEach(function(card){
        card.addEventListener('click', flipCard)
    });   
}

function deactivateCards(){
    cards.forEach(function(card){
        card.removeEventListener('click', flipCard)
    });     
}

// Shuffle on refresh
document.body.onload = shuffle();
document.body.onload = activateCards();