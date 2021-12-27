function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator){
    if (!prevInput){
        prevInput = +input;
        input = 0;
    }
    else{
        input = +input;
        switch(operator){
            case "+":
                answer = add(prevInput,input);
                break;
            case "-":
                answer = subtract(prevInput,input);
                break;
            case "x":
                answer = multiply(prevInput,input);
                break;
            case "/":
                answer = divide(prevInput,input);
                break;
        }
        display.textContent = answer;
    }
}

let input = 0;
let prevInput;
let answer = 0;
const display   = document.querySelector(".display");
const container = document.querySelector(".container");
const num       = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");

num.forEach( (num) => {
    num.addEventListener("click", () => {
        input += num.textContent;
        display.textContent = input;
    });

});

operators.forEach( (operator) => {
    operator.addEventListener("click", () => operate(operator.textContent));
});
