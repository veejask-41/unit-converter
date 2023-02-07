/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

let inputNumber = 0
let converted = false

inputEl.addEventListener("click", function() {
    if (converted) {
        inputEl.value = ""
        converted = false
    }
})

convertBtn.addEventListener("click", function() {
    inputNumber = Number(inputEl.value)
    convert(inputNumber)
    converted = true
})

function convert(number) {
    // length
    let meterToFeet = number * 3.281
    let feetToMeter = number / 3.281
    // volume
    let litreToGallon = number * 0.264
    let gallonToLitre = number / 0.264
    //mass
    let kilogramToPound = number * 2.204
    let poundToKilogram = number / 2.204
    
    // render
    lengthEl.textContent = `${number} meters = ${meterToFeet.toFixed(3)} feet | ${number} feet = ${feetToMeter.toFixed(3)} meters`
    volumeEl.textContent = `${number} litres = ${litreToGallon.toFixed(3)} gallons | ${number} gallons = ${gallonToLitre.toFixed(3)} litres`
    massEl.textContent = `${number} kilograms = ${kilogramToPound.toFixed(3)} pounds | ${number} pounds = ${poundToKilogram.toFixed(3)} kilograms`    
}