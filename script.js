function operate(){
    switch(prevSymbol){
        case "+":
            answer = prevAns + +input;
            break;
        case "–":
            answer = prevAns - +input;
            break;    
        case "x":
            answer = prevAns * +input;
            break;
        case "÷":
            answer = prevAns / +input;
            break;
        case null:
            answer = +input;
            break;
    }
    if(prevSymbol == null) upper.textContent = `${answer} ${symbol} `;
    else if (symbol == "=") upper.textContent = `${+prevAns} ${prevSymbol} ${+input} =`;
    else upper.textContent = `${answer} ${prevSymbol} `;
    bottom.textContent = +answer;
    
    prevAns     = +answer;
    prevSymbol  = symbol;
    newNumber   = true;
}

let input       = null;
let answer      = null;
let prevAns     = null;
let symbol      = null;
let prevSymbol  = null;
let newNumber   = true;

const upper     = document.querySelector(".upper");
const bottom    = document.querySelector(".bottom");
const clear     = document.querySelector(".clear");
const back      = document.querySelector(".back");
const dot       = document.querySelector(".dot");
const num       = document.querySelectorAll(".num");
const op        = document.querySelectorAll(".op");


//Event listener for the number keys
num.forEach((num) => {
    num.addEventListener("click", () => {
        if(newNumber){
            input = 0;
            newNumber = false;
        }
        input += num.textContent;
        bottom.textContent = +input;
    });
});

//Event listener for the operator keys
op.forEach((op) => {
    op.addEventListener("click", () => {
        symbol = op.textContent;
        operate();
    });
});

//Event listener for the clear button
clear.addEventListener("click", () => {
    upper.textContent   = "";
    bottom.textContent  = 0;
    input       = null;
    answer      = null;
    prevAns     = null;
    symbol      = null;
    prevSymbol  = null;
    newNumber   = true;
});

//Event listener for the delete/backspace button
back.addEventListener("click", () => {
    if(input){
        input = input.slice(0, -1);
        bottom.textContent = +input;
    }
});

//Event listener for the dot/decimal/period button
dot.addEventListener("click", () => {
    input += dot.textContent;
    bottom.textContent = +input;
});