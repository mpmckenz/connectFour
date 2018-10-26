function clickBehavior(event) {
    const columnElement = event.currentTarget;
    const columnIndex = parseInt(columnElement.dataset.columnIndex);
    const rowIndex = columnElement.childElementCount - 1;

    if (columnElement.childElementCount === 6) {
        return;
    }

    dropDisk(columnElement);
    recordDroppedDisk(columnIndex, rowIndex);
    // let columnIndex = colRowIndexes[0];
    // let rowIndex = colRowIndexes[1];
    // checkWinner(columnIndex, rowIndex);
    togglePlayer();

}

function dropDisk(columnElement) {
    let disc = document.createElement("div");
    disc.classList.add("disc", game.player);
    columnElement.appendChild(disc);
}

function recordDroppedDisk(columnIndex, rowIndex) {
    game.grid[columnIndex][rowIndex] = game.player;
}

function togglePlayer() {
    console.log(game)
    if (game.player === "red") {
        game.player = "black";
    } else {
        game.player = "red";
    }
}

function checkWinner(columnIndex, rowIndex) {
    if (
        winHorizontally(columnIndex, rowIndex)
        // || winVertically()
        // || winDiagonallyUpRight()
        // || winDiagonallyDownRight()
    ) {
        showWinner()
        removeClickListeners()
    }
}


function winHorizontally(columnIndex, rowIndex) {
    const columnEdge = game.grid.length - 3;
    const rowEdge = game.grid[columnIndex].length - 3;
    for (let columnIndex = 0; columnIndex < columnEdge; columnIndex++) {
        for (let rowIndex = 0; rowIndex < rowEdge; rowIndex) {
            const twoInARow = game.grid[columnIndex + 1][rowIndex]
            const threeInARow = game.grid[columnIndex + 2][rowIndex]
            const fourInARow = game.grid[columnIndex + 3][rowIndex]
            const match = twoInARow && threeInARow && fourInARow;
            return match
        }
    }
}

function winVertically(columnIndex, rowIndex) {
    const topEdge = game.grid.height - 3;
    for (let columnIndex = 0; ColumnIndex < topEdge; ColumnIndex++) {
    const twoUp = game.grid[columnIndex + 1][rowIndex]
    const threeUp = game.grid[columnIndex + 1][rowIndex]
    const fourUp = game.grid[columnIndex + 1][rowIndex]
    const match = twoUp && threeUp && fourUp;
    return match
    }
}

function showWinner() {
    let winMsg = document.getElementById("winner");
    let winElement = document.createElement("div")
    winElement.innerHTML = `${game.player} won the game!`;
    winMsg.appendChild(winElement)
    console.log(game.player)
    removeClickListeners();
};