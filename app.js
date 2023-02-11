const button = document.querySelector("#btn");
const container = document.querySelector(".container");
const colorName = document.querySelector(".color")
const HEX = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"]
const timer = setInterval(() => {
    generationHex()
}, 1000);


button.addEventListener("click", function () {
    clearInterval(timer)
    generationHex()
});




function generationHex() {
    let hexColor = "#";

    for(let i = 0; i < 6; i++) {
        hexColor += HEX[ randomValue(HEX) ]
    }

    container.style.backgroundColor = hexColor;
    colorName.textContent = hexColor; 
}

generationHex()

function randomValue(arr) {
    return Math.floor( Math.random() * arr.length );
}

