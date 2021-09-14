





//gridItems
let center = document.getElementById("grid");
createGridUnit(4);

//slider functionality
let gridSize = document.querySelector(".left p");
let slider = document.querySelector(".slider");
let rainbow = document.querySelector(".rainbow");
let eraser = document.querySelector(".eraser");
let clear = document.querySelector(".clear");
let colorPicker = document.querySelector("#colorpicker");

let backgroundColor = "black";
let rainbowMode = false;

colorPicker.onclick = function() {
    rainbowMode = false;
    backgroundColor = this.value;
}

colorPicker.onchange = function () {
    rainbowMode = false;
    backgroundColor = this.value;
}

eraser.onclick = function () {
    rainbowMode = false;
    backgroundColor = "white";
}

clear.onclick = function () {
    let gridItems = Array.from(document.querySelectorAll(".unit"));

    gridItems.forEach((item) => {

        item.style.backgroundColor = "white";
    })
}

rainbow.onclick = function () {
    rainbowMode = true;
}


//slider.addEventListener("oninput", updateGrid);
slider.oninput = function () {
    console.log(this.value);
    gridSize.innerHTML = this.value + " x " + this.value;
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

    for (let i = 0; i < Math.pow(size, 2); i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "unit");
        div.style.width = `${center.offsetWidth / size}px`;
        div.style.height = div.style.width;
        center.appendChild(div);

    }
    let gridItems = Array.from(document.querySelectorAll(".unit"));

    gridItems.forEach((item) => {

        item.addEventListener("mouseenter", hoverColor);
    })
}



function hoverColor(e) {
    let unit = e.target;
    if (rainbowMode == true) {
        let rand1 = Math.random() * 255;
        let rand2 = Math.random() * 255;
        let rand3 = Math.random() * 255;
        unit.style.backgroundColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
    }
    else {
        unit.style.backgroundColor = backgroundColor;

    }
}

function inProgress() {
    gridItems.forEach((item) => {
        item.classList.remove("hovering");
        item.classList.add("clear");
    })
}


