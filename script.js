const container = document.querySelector('.container');
const newGridBtn = document.querySelector('.new-grid');

// print out a 16 x 16 grid
function printGrid(num) {
    // clear container
    container.innerHTML = '';

    // set container grid-template-columns property
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    // container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    let y = 0;
    while(y < num * num) {
        // create divs
        let div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover', paint);
        container.appendChild(div);
        y++;
    }

    document.querySelectorAll('.container div').forEach(el => el.style.height = el.offsetWidth);
}

function createNewGrid(e) {
    let dimension = prompt("Please enter the number of squares per side for the new grid");
    dimension = Number(dimension);
    
    if(!dimension || dimension == NaN){
        return;
    }

    if(dimension >= 100) {
        alert("Sorry! you can't go beyond 99 squares.");
        return;
    }

    // print new grid
    printGrid(dimension);
}

function paint(e) {
    e.target.style.backgroundColor = "#000";
}

// Display grid
printGrid(16);

newGridBtn.addEventListener('click', createNewGrid);

