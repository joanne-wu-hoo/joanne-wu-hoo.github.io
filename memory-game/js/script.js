// Select all the memory-card elements with document.querySelectorAll
const cards = document.querySelectorAll('.memory-card');

// Initialize variables to handle flipstate
let hasFlippedCard = false;
let firstCard, secondCard;

// Function to flip cards & assign firstCard, secondCard
function flipCard(){
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
        // Revert hasFlippedCard back to false
        hasFlippedCard = false;
    }
}


// Loop through each of these cards and add an event listener on a "click" event to execute "flipCard" function
cards.forEach(function(card){
    card.addEventListener('click', flipCard)
});
