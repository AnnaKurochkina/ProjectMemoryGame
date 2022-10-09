import { shuffleArray, delay } from "./helpers.js";

const allCardImages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const state = {
    // gameStarted: false,
    flippedCards: [],
    matchedCards: [],
    remainingFlips: 100,
    remainingTime: 60,
    cardImages: []
};

//grab the size selector and reset button
const sizeSelector = document.querySelector("#size");
const resetButton = document.querySelector("#reset");

const renderGrid = () => {
    //grab the grid
    const grid = document.querySelector(".grid-container__memoryGame");
    //set its class name to correspond with the user's selected size
    switch (state.cardImages.length) {
        case 16://Small
            grid.className = "grid-container__memoryGame small";
            break;
        case 20://Medium
            grid.className = "grid-container__memoryGame medium";
            break;
        case 36://Large
            grid.className = "grid-container__memoryGame large";
            break;
    }
    //clear the grid contents
    grid.innerHTML = "";
    //for each cardImage in the current game state array
    state.cardImages.forEach((cardImage) => {
        //create a new div for the card
        const card = document.createElement("div");
        //set its class name
        card.className = "flip-card-container";
        //tag the card div with the number of cardImage
        card.dataset.card = cardImage;
        //set its innerHTML
        card.innerHTML =
        `<div class="flip-card">
            <div class="flip-card-front"></div>
            <div class="flip-card-back">
                <img src="./MonsterPictures/monster${cardImage}.png" alt="Monster">
            </div>
        </div>`;
        grid.append(card);
        card.addEventListener("click", () => {
            //if clicked card is already in the matchedCards array, do nothing
            if (!state.matchedCards.includes(cardImage)) {
                //else flip the card and add it to the flippedCards array
                card.classList.toggle("flip");
                state.flippedCards.push(card);
                //check if we had 2 flipped cards
                if (state.flippedCards.length == 2) {
                    //if so, check if they are match each other
                    //state.flippedCards[0] is an entire OBJECT (the HTML node for the card)
                    //below, this "state.flippedCards[0].dataset.card" reads the part highlighted here:
                    //                                 >>>>>>>>>>>>>
                    //<div class="flip-card-container" data-card="12">
                    //and gets the number 12 (in this example)
                    if (state.flippedCards[0].dataset.card == state.flippedCards[1].dataset.card) {
                        //if so, add the cardImage to the matchedCards array and clear the flippedCards array
                        state.matchedCards.push(state.flippedCards[0].dataset.card);
                        state.flippedCards = [];
                        if (state.matchedCards.length == sizeSelector.value) {
                            alert("You won!");
                        }
                    } else {
                        //store a copy of each flipped card
                        const card1 = state.flippedCards[0];
                        const card2 = state.flippedCards[1];
                        //clear the flipped cards
                        state.flippedCards = [];
                        //wait a bit, then...
                        delay(1000).then(() => {
                            //flip them both back again
                            card1.classList.toggle("flip");
                            card2.classList.toggle("flip");
                        });
                    }
                }
            }
        });
    });
};

const reset = () => {
    state.flippedCards = [];
    state.matchedCards = [];
    state.remainingFlips = 100;
    state.remainingTime = 60;
    state.cardImages = [];

    //first shuffle the source array (so that we get differen images each game)
    shuffleArray(allCardImages);
    //read the size value selected by the user
    const halfSize = sizeSelector.value;
    //take first n number of cardImage ids into a temporary array
    const sliced = allCardImages.slice(0, halfSize);
    //for each item in the temporary array, push 2 copies into the current game state array
    sliced.forEach((cardImage) => state.cardImages.push(cardImage, cardImage));
    //now we have the game state array consisting of pairs in sequence, so we shuffle them
    shuffleArray(state.cardImages);

    //finally we can render the grid
    renderGrid();
}

resetButton.addEventListener("click", reset);

reset();