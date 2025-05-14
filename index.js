const container = document.querySelector('#container');

function createGrid() {
    const columns = 16;
    const rows = 16;
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for(let i = 0; i < columns; i++){
        const col = document.createElement('div');
        col.classList.add(`column`);
        for(let j = 0; j < rows; j++){
            const box = document.createElement('div');
            box.classList.add('box');
            col.appendChild(box);
        }
        grid.appendChild(col);
    }
    container.append(grid);
}
