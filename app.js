const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

let calculation = [];
let accumulativeCalc;

function calculate(btn){
    const value = btn.textContent;

    if(value === "CLEAR"){
        calculation = [];
        screen.textContent = "0";
    }
    else if(value === "="){
        screen.textContent = eval(accumulativeCalc);
    }
    else{
        if(calculation.length <= 8){
            calculation.push(value);
        }
        accumulativeCalc = calculation.join("");
        screen.textContent = accumulativeCalc;
    }
}

buttons.forEach((btn) =>{
    btn.addEventListener("click", () => calculate(btn))
})