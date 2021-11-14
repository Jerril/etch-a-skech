const container = document.querySelector('.container');

let cols = 16,
    rows = 16;

// print out a 16 x 16 grid
let y = 0;
while(y < rows) {
    let x = 0;
    while(x < cols){
        // create divs
        let div = document.createElement('div');
        div.textContent = ' ';
        // insert it into container div
        container.appendChild(div);
        x++;
    }
    y++;
}

