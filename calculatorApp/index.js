
// DOM

let resultEl = document.getElementById("result")
let num1El = document.getElementById("number1")
let num2El = document.getElementById("number2")

// Reactive functions
function add() {
    resultEl.textContent = Number(num1El.value) + Number(num2El.value)
}
function subtract() {
    resultEl.textContent = Number(num1El.value) - Number(num2El.value)
}
function divide() {
    resultEl.textContent = Number(num1El.value) / Number(num2El.value)
}
function multiply() {
    resultEl.textContent = Number(num1El.value) * Number(num2El.value)
}