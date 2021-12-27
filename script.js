function operate(){
    newNumber = true;


    switch(symbol){
        case "+":
            answer = prevAns + +input;
            break;
     /*   case "–":
            answer = prevAns - +input;
            break;    
        case "x":
            if(firstPass){
                firstPass = false;
                prevAns = 1;
            }
            answer = prevAns * +input;
            break;
        case "÷":
            if(firstPass){
                firstPass = false;
                prevAns = 1;
            }
            answer = prevAns / +input;
            break;*/
    }
    bottom.textContent = +answer;
    prevAns = +answer;
}

let firstPass = true;
let input = null;
let prevAns = null;
let answer = null;
let symbol = null;

const bottom    = document.querySelector(".bottom");
const num       = document.querySelectorAll(".num");
const op        = document.querySelectorAll(".op");
let newNumber = true;


//Event listener of number keys
num.forEach((num) => {
    num.addEventListener("click", () => {
        if(newNumber){
            newNumber = false;
            input = 0;
        }
        input += num.textContent;
        bottom.textContent = +input;
    });
});

//Event listener of operators
op.forEach((op) => {
    op.addEventListener("click", () => {
        symbol = op.textContent;
        operate();
    });
});