const container = document.querySelector('#container');
const btn = document.querySelector('.input');
const grid = document.querySelector('.grid');

function createGrid(size) {
    const containerSize = 500; // Assuming the grid is 500x500
    const boxSize = containerSize / size;

    grid.innerHTML = ''; // Clear the grid

    for (let i = 0; i < size; i++) {
        const col = document.createElement('div');
        col.classList.add('column');

        for (let j = 0; j < size; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`; // Dynamically set box size
            col.appendChild(box);
        }

        grid.appendChild(col);
    }
}


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

function handleclick(e) {
    let userInput = prompt('Enter size of grid:', 16);
    grid.textContent = '';
    createGrid(Number(userInput));

    const boxes = document.querySelector('.grid');
    boxes.addEventListener('mouseover', (e) => {highlightSquares(e)});
}

btn.addEventListener('click', (e) => {
    handleclick(e);
})

