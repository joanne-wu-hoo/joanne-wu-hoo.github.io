/*

Requirements:
- If cards match, keep them flipped over
- If cards do NOT match, unflip them after 1 sec (at least)
- Keep track of # of total flips

Approach:
1. Store all memory-card elements with document.querySelectorAll 
2. Loop through each card and assign an eventlistener on "click" to flip card & check for match

Variables/notes:
* let firstCard, secondCard; used to keep track first and second selected card
* let hasFlippedCard = false; 
   when false --> first card selected, change hasFlippedCard to true, set firstCard = this
   when true --> second card selected, change hasFlippedCard back to false, set secondCard = this
* use the card's class/id to determine match

Functions:
1. flipCards
- add "flip" class to selected card (in css "flip" class = 180degree rotation)
- check hasFlippedStatus to determine firstCard, secondCard
- if firstCard, return
- if secondCard, execute checkForMatch

2. checkForMatch
- Check if selectedCards are a match
- If MATCH --> disable flipCard so that cards can not be selected/flipped
- If NOT a match --> unflipCards

3. unflipCards
* Need to use a timer to ensure 1 s transpires before flipping cards back over

*/



// Select all the memory-card elements with document.querySelectorAll
const cards = document.querySelectorAll('.memory-card');

// Initialize variables to handle flipstate
let hasFlippedCard = false;
let firstCard, secondCard;

// Function to flip cards & assign firstCard, secondCard
function flipCard(){
    // Access the cards classlist and add "flip" class
    this.classList.add('flip');

    /* 
    Check hasFlippedCard status
    If false --> then first card (then change hasFlippedCard to true)
    If true --> then second card (then change hasFlippedCard back to false)
    */
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
        // Call checkForMatch 
        checkForMatch();
    }
}

/*
Function to check for match
 If there is a match, disable the event listener that fires flipCard on click (so cards cannot be clicked again)
 If NOT a match --> unflip cards
*/
function checkForMatch(){
    if (firstCard.dataset.framework === secondCard.dataset.framework){
        // disable even listneres
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        return;
    } else {
        unflipCards();
    }
}

/*
Function to unflip cards. Assign a 1 second (60000 ms) delay!
*/
function unflipCards(){
    setTimeout(function(){
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    },60000);
}

// Loop through each of these cards and add an event listener on a "click" event to execute "flipCard" function
cards.forEach(function(card){
    card.addEventListener('click', flipCard)
});

