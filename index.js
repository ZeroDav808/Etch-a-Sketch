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

createGrid();

function getRandomInt() {
    return Math.floor(Math.random() * 256);
}

function clearColor(element) {
    element.style.backgroundColor = 'white';
}

function highlightSquares(e) {
    if(e.target.className === 'box'){
        const element = e.target;
        element.style.backgroundColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
        setTimeout(() => clearColor(element),3000);
    }
}

const boxes = document.querySelector('.grid');

boxes.addEventListener('mouseover', (e) => {highlightSquares(e)});