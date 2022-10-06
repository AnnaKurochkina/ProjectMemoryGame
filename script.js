import shuffleArray from "./helpers.js";

const state = {
    // gameStarted: false,
    peakedCards: [],
    flippedCards: [],
    remainingFlips: 100,
    remainingTime: 60,
    cardImages: [
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://w7.pngwing.com/pngs/940/723/png-transparent-drawing-monster-cartoon-little-monsters-cartoon-character-photography-smiley-thumbnail.png",
        "https://c8.alamy.com/comp/T9CB60/happy-cartoon-monster-vector-blue-monster-illustration-halloween-design-T9CB60.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
        "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg"
    ]
};

const renderGrid = () => {
    const grid = document.querySelector(".grid-container__memoryGame");
    grid.innerHTML = "";
    state.cardImages.forEach((cardImage) => {
        const card = document.createElement("div");
        card.className = "flip-card-container";
        card.innerHTML =
        `<div class="flip-card">
            <div class="flip-card-front"></div>
            <div class="flip-card-back">
                <img src="${cardImage}" alt="Monster">
            </div>
        </div>`;
        grid.append(card);
        card.addEventListener("click", () => {
            card.classList.toggle("flip");
        });
    });
};

shuffleArray(state.cardImages);
renderGrid();

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    state.peakedCards = [];
    state.flippedCards = [];
    state.remainingFlips = 100;
    state.remainingTime = 60;
    shuffleArray(state.cardImages);
    renderGrid();
});