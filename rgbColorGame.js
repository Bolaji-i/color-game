let numSquares = 6;
let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let h1 = document.querySelector("h1");
let message = document.querySelector("#message");
let colorPicked = pickColor();

let reset = document.querySelector("#reset");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");

colorDisplay.textContent = colorPicked;

for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.background;

        if(clickedColor === colorPicked){
            message.textContent = "You got it mate!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            reset.textContent = "Play again";
        } else {
            this.style.background = "#232323";
            message.textContent = "Try again!";
        }
    });
}

easy.addEventListener("click", function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    h1.style.background = "darkolivegreen";
    message.textContent = "";
    for (let i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }   
    }
});

hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    h1.style.background = "darkolivegreen";
    message.textContent = "";
    for (let i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
 });


function changeColors(color){
    for (let i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}


function pickColor(){
    let randum = Math.floor(Math.random() * colors.length);
    return colors[randum];
}

function randomColor(){ 

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num){
    let arr = [];
    for (let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
} 

reset.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    this.textContent = "New colors"
    message.textContent = "";
    for (let i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "darkolivegreen";
});
