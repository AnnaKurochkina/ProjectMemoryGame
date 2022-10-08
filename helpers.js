export const shuffleArray = (array) => {
    let currentIndex = array.length;  
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

export const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default {
    shuffleArray,
    delay
};
