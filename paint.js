





//gridItems
let center = document.getElementById("grid");
//console.log(performance.now());
createGridUnit(32);
//console.log(performance.now());

//slider functionality
let gridSize = document.querySelector(".left p");
let slider = document.querySelector(".slider");
let rainbow = document.querySelector(".rainbow");
let eraser = document.querySelector(".eraser");
let clear = document.querySelector(".clear");
let colorPicker = document.querySelector("#colorpicker");

let backgroundColor = "black";
let rainbowMode = false;


center.addEventListener('mouseover', e => {
    if (e.target.className == 'unit') {
        hoverColor(e.target);
    }
})

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
slider.onchange = function () {
    //console.log(this.value);
    createGridUnit(this.value);


}

slider.oninput = function () {
    gridSize.innerHTML = this.value + " x " + this.value;
}
function createGridUnit(size) {
    //console.log(performance.now());

    while (center.firstChild) {
        center.removeChild(center.firstChild);
    }
    //console.log(performance.now());

    center.style.gridTemplateColumns = `repeat( ${size} , 1fr)`;
    center.style.gridTemplateRows = `repeat( ${size} , 1fr)`;

    //console.log(performance.now());

    for (let i = 0; i < Math.pow(size, 2); i++) {

        let length = 500/size;
        let div = document.createElement("div");

        div.setAttribute("class", "unit");
        //console.log(performance.now());
        //console.log(500 / size + "px");
        div.style.width = length + "px";
        //console.log(performance.now());

        div.style.height = length + "px";

        center.appendChild(div);

    }
    //console.log(performance.now());

    //let gridItems = Array.from(document.querySelectorAll(".unit"));

    /*gridItems.forEach((item) => {

        item.addEventListener("mouseenter", hoverColor);
    })*/
}



function hoverColor(unit) {
    //let unit = e.target;
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




