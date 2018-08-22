const game = {
    grid: null,
    player: null,
    columnElements: document.getElementsByClassName("column")
}

function startGame() {
    game.player = "red";
    // grid[columnIndex][rowIndex]
    // outer loop will always be looping over columns
    // inner loop will always be looping over rows
    game.grid = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
    ]
    addClickListeners();
}

function addClickListeners() {
    for (let columnElement of game.columnElements) {
        columnElement.addEventListener("click", clickBehavior);
    }
}

function removeClickListeners() {
    for (let columnElement of game.columnElements) {
        columnElement.removeEventListener("click", clickBehavior);
    }
}

function refreshButton() { };

startGame();