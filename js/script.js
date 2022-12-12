function createNewGame() {
    let difficulty = document.getElementById('level').value;

    let cellsNumber;
    let cellsPerRow;

    switch (difficulty) {
        case "1":
            cellsNumber = 100;
            cellsPerRow = 10
            break;
        case "2":
            cellsNumber = 81;
            cellsPerRow = 9;
            break;
        case "3":
            cellsNumber = 49;
            cellsPerRow = 7;
            break;
        default:
            cellsNumber = 100;
            cellsPerRow = 10
            break;
    }

    generateGameGrid(cellsNumber, cellsPerRow);
}

function createSingleCell(num) {
    const cells = document.createElement('div');

    cells.classList.add('square');

    let sideLength = '100px';
    cells.style.width = sideLength;
    cells.style.height = sideLength;

    cells.innerText = num;

    return cells
}

function generateGameGrid(cellsNumber, cellsPerRow) {

    //cancella e ricrea la griglia senza moltiplicarla
    document.querySelector('.container').innerHTML = '';

    const grid = document.createElement('div');
    grid.classList.add('grid');
    

    const grid_side = cellsPerRow * 100;
    grid.style.width = `${grid_side}px`;
    grid.style.height = `${grid_side}px`;

    for (let i = 0; i < cellsNumber; i++) {
        const cell = createSingleCell(i+1, cellsPerRow);

        cell.addEventListener('click', function () {
            this.classList.toggle('clicked');
        })

        grid.appendChild(cell);
    }

document.querySelector('.container').appendChild(grid)

}


document.getElementById('play-game').addEventListener('click', function () {
    createNewGame()
}

)