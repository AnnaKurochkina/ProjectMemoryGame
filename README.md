# Project Memory Game

## Goals for the project:

1. Create a working Game: The main task is to create a Game not only will this test your understanding of JavaScript but how you break down a problem.
2. Practice using Git and GitHub flow: We want you to get as much practice as possible using git, GitHub and the command line.
3. Get a better understanding of how to scope a larger project: We want to see a clear plan of what you're going to build and how.
4. Apply what you are learning: This is a great place to apply what you have been learning on all of the course so far. When you get it functioning really push on the UI, use SCSS, BEM, anything else you find on the web....really go mad!

## Web browser memory game. 
- Has 3 grid sizes to choose from
- Time limit which scales with grid size
- Attempt limit which scales with grid size
- Responsive design
- Animated confetti when completing the game

## Pseudocode for the game
1. Reset game state based on selected grid size (user can do this at any time)
    - grab a fresh batch of random monster images (half the number of the grid size)
    - render the grid with 2 copies of each monster image
    - set game state properties to the starting values
    - hook up click event handlers for each card
2. User flips first card
    - timer starts ticking if game is not already started
    - mark game as started
    - each timer tick, decrement remaining seconds, if it reaches 0, go to step 9
3. User flips second card
    - decrement remaining attempts count, if it reaches 0, go to step 9
4. If it's a match go to step 5, otherwise go to step 6
5. Add flipped cards image to matched cards array (matched cards do not respond to clicks), go to step 7
6. Delay for a bit while ignoring clicks, then flip both cards back, go to step 2
7. Check if all cards are matched, if so go to step 8, otherwise go to step 2
8. Stop timer, display success dialog, when closed go to step 1
9. Stop timer, display failure dialog, when closed go to step 1

## Flow-chart

![image](https://user-images.githubusercontent.com/73474619/195142265-ac9f05c4-0852-41d6-8e4a-e348c9696bbb.png)
