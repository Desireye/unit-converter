/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const lengthConvert = document.getElementById("length-convert")
const volumeConvert = document.getElementById("volume-convert")
const massConvert = document.getElementById("mass-convert")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    let meters = inputEl.value / 3.281
    let feet = inputEl.value * 3.281
    lengthConvert.textContent = `${inputEl.value} meters = ${feet.toFixed(3)} feet | 
                                ${inputEl.value} feet = ${meters.toFixed(3)} meters`
    
    let liters = inputEl.value / 0.264
    let gallons = inputEl.value * 0.264
    volumeConvert.textContent = `${inputEl.value} liters = ${gallons.toFixed(3)} feet | 
                                ${inputEl.value} gallons = ${liters.toFixed(3)} liters`
    
    let kilos = inputEl.value / 2.204
    let pounds = inputEl.value * 2.204
    massConvert.textContent = `${inputEl.value} kilos = ${pounds.toFixed(3)} pounds | 
                                ${inputEl.value} pounds = ${kilos.toFixed(3)} kilos`
})