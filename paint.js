





//gridItems
let center = document.getElementById("grid");
createGridUnit(4);

//slider functionality
let gridSize = document.querySelector(".left p");
let slider = document.querySelector(".slider");
console.log(slider.value);

//slider.addEventListener("oninput", updateGrid);
slider.oninput = function() {
    console.log(this.value);
    gridSize.innerHTML = this.value + "x" + this.value;
    createGridUnit(this.value);


  }

function createGridUnit(size) {
    while (center.firstChild) {
        center.removeChild(center.firstChild);
    }
    let gridInput = "";
    for (let j = 0; j < size; j++) {
        gridInput = gridInput + " 1fr";
    }
    center.style.gridTemplateColumns = gridInput;
    center.style.gridTemplateRows = gridInput;
    for (let i = 0; i < Math.pow(size,2); i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "unit");
        div.style.width = `${center.offsetWidth / size}px`;
        div.style.height = div.style.width;
        //console.log(`${center.offsetWidth / size}`);
        center.appendChild(div);

    }
    let gridItems = Array.from(document.querySelectorAll(".unit"));

    gridItems.forEach((item) => {
    console.log("adding events");

    item.addEventListener("mouseenter", color);
})
}
function updateGrid(size) {
    console.log(size);
    gridSize.innerHTML = "Grid Size: " + size + "x" + size;
    createGridUnit(size);
}


function color(e) {
    console.log("hovering");
    let unit = e.target;
    unit.classList.remove("clear");
    unit.classList.add("hovering");
}

function clear() {
    console.log("clear");
    gridItems.forEach((item) => {
        item.classList.remove("hovering");
        item.classList.add("clear");
    })
}