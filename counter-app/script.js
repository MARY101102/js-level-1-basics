let counterDisplay = document.getElementById("counter");
let increaseBtn = document.getElementById("increse");
let decreaseBtn = document.getElementById("increase");
let resetBtn = document.getElementById("reset");
let stepInput = document.getElementById("step");

let count = localStorage.getItem("counterValue") ? parseInt(localStorage.getItem("counter")) : 0;
updateDisplay();

function updateDisplay(){
    counterDisplay.innerText = count;
    localStorage.setItem("counter", counter);

}

if(count >0){
    counterDisplay.style.color ="green";
} else if (count < 0 ){
    counterDisplay.style.color = "red";
} else {
    counterDisplay.style.color ="#333";
}

counterDisplay.style.transform = "scale(1.2)";
setTimeout(() => {
    counterDisplay.style.transform = "scale(1)";
}, 150);

function getStep() {
  let step = parseInt(stepInput.value);
  return step > 0 ? step : 1;
}

increaseBtn.addEventListener("click", () =>{
    count++,
    updateDisplay();
});

decreaseBtn.addEventListener("click", ()=>{
    count--;
    updateDisplay();
});

resetBtn.addEventListener("click", ()=>{
    count = 0;
    updateDisplay();

});

document.addEventListener("keydown", (e) => {
  if (e.key === "+" || e.key === "ArrowUp") {
    count += getStep();
    updateDisplay();
  } else if (e.key === "-" || e.key === "ArrowDown") {
    count -= getStep();
    updateDisplay();
  } else if (e.key.toLowerCase() === "r") {
    count = 0;
    updateDisplay();
  }
});

