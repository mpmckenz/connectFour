function clickBehavior(event) {
    const columnElement = event.currentTarget;

    if (columnElement.childElementCount === 6) {
        return;
    }

    dropDisk(columnElement);
    recordDroppedDisk(columnElement);
    checkWinner();
    togglePlayer();

    console.log(game.grid)
}

function dropDisk(columnElement) {
    let disc = document.createElement("div");
    disc.classList.add("disc", game.player);
    columnElement.appendChild(disc);
}

function recordDroppedDisk(columnElement) {
    const columnIndex = parseInt(columnElement.dataset.columnIndex);
    const rowIndex = columnElement.childElementCount - 1;
    game.grid[columnIndex][rowIndex] = game.player;
}

function togglePlayer() {
    if (game.player === "red") {
        game.player = "black";
    } else {
        game.player = "red";
    }
}

function checkWinner() {
    // TODO: Write ONE win function which returns TRUE if a win is detected, or else FALSE
    // TODO: Then write the other win functions, one at a time.
    if (winHorizontally() || winVertically() || winDiagonallyUpRight() || winDiagonallyDownRight()) {
        showWinner()
        removeClickListeners()
    }
}

function winHorizontally() {
    const columnEdge = game.grid.length - 3;
    for (let columnIndex = 0; columnIndex < columnEdge; columnIndex) {
        const rowEdge = game.grid[columnIndex].length - 3;
        for (let rowIndex = 0; rowIndex < rowEdge; rowIndex) {

            // if (we have four in a row then) {
                // return true
            // }

        }
    }

    return false
}

function showWinner() { 
    // TODO: show user who the winner is, but for now:
    console.log(game.player, "won the game!")
};
