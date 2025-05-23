const container = document.querySelector(".container");



function createGrid(len) {
    const size = 100/len;
    for (let i=0; i<(len*len); i++) {
        const gridSquare = document.createElement("div");
        gridSquare.setAttribute("class", "gridItem");
        gridSquare.setAttribute("style", `width: ${size}%; height: ${size}%`);
        gridSquare.textContent = "-";
            
        container.appendChild(gridSquare);
    }
}

createGrid(16);


