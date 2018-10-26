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
    if (
        winHorizontally()
        // || winVertically()
        // || winDiagonallyUpRight()
        // || winDiagonallyDownRight()
    ) {
        showWinner()
        removeClickListeners()
    }
}

const columnEdge = game.grid.length - 3;
const rowEdge = game.grid[columnIndex].length - 3;
const topEdge = game.grid.height - 3;

function winHorizontally() {
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