import shuffleArray from "./helpers.js";

const allCardImages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const state = {
    // gameStarted: false,
    peakedCards: [],
    flippedCards: [],
    remainingFlips: 100,
    remainingTime: 60,
    cardImages: []
};

const renderGrid = () => {
    const grid = document.querySelector(".grid-container__memoryGame");
    grid.innerHTML = "";
    state.cardImages.forEach((cardImage) => {
        const card = document.createElement("div");
        card.className = "flip-card-container flip";
        card.innerHTML =
        `<div class="flip-card">
            <div class="flip-card-front"></div>
            <div class="flip-card-back">
                <img src="./MonsterPictures/monster${cardImage}.png" alt="Monster">
            </div>
        </div>`;
        grid.append(card);
        card.addEventListener("click", () => {
            card.classList.toggle("flip");
        });
    });
};

const reset = () => {
    state.peakedCards = [];
    state.flippedCards = [];
    state.remainingFlips = 100;
    state.remainingTime = 60;
    state.cardImages = [];

    shuffleArray(allCardImages);
    const sliced = allCardImages.slice(0, 8);
    sliced.forEach((cardImage) => state.cardImages.push(cardImage, cardImage));
    shuffleArray(state.cardImages);
    renderGrid();
}

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", reset);

reset();