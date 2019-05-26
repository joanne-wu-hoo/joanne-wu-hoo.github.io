// Flip the cards
// Select all the memory-card elements with document.querySelectorAll
const cards = document.querySelectorAll('.memory-card');

// Access the cards classlist and toggle "flip" class
function flipCard(){
    this.classList.toggle('flip');
}

// Loop through each of these cards and add an event listener on a "click" event to execute "flipCard" function
cards.forEach(function(card){
    card.addEventListener('click', flipCard)
});