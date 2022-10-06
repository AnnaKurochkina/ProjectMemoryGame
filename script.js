const cardImages = [
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
    "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
    "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
    "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg",
    "https://c8.alamy.com/zooms/9/5616233966f24ab2a8ddfa37658c4ac7/t8tbmn.jpg"
];

const renderGrid = () => {
    const grid = document.querySelector(".grid-container__memoryGame");
    grid.innerHTML = "";
    cardImages.forEach((cardImage) => {
        const card = document.createElement("div");
        card.className = "flip-card-container";
        card.innerHTML =
        `<div class="flip-card">
            <div class="flip-card-front">Front</div>
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

renderGrid();
