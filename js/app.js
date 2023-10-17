const counterValue = document.getElementById('counter-value');
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
const resetBtn = document.getElementById('reset-btn');

let counter = 0;

plusBtn.addEventListener('click', ()=>{
    counter++;
    counterValue.innerHTML = counter;
});

minusBtn.addEventListener('click', ()=>{
    counter--;
    counterValue.innerHTML = counter;
});

resetBtn.addEventListener('click', reset);

function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}