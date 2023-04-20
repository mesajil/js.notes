
// DOM

let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let counter = 0



// Functions

function increment() {
    countEl.textContent = ++counter
}
document.getElementById('decrement-btn').onclick = function decrement() {
    countEl.textContent = counter? --counter : counter
}

function save() {
    saveEl.textContent += countEl.textContent + ' - '
    countEl.textContent = counter = 0
}