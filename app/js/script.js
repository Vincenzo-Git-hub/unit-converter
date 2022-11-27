const btnEl = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')

const lenghtEl = document.getElementById('lenght')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')

btnEl.addEventListener('click', function() {
    //console.log(inputEl.value)
    meterFeetConverter()
    litersGallonsConverter()
    kilogramsPoundsConverter()
    inputEl.value = ''
})

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

function meterFeetConverter() {
    const meterFeet = inputEl.value * 3.281
    const feetMeter = inputEl.value / 3.281
    lenghtEl.textContent = `${inputEl.value} meters = ${meterFeet.toFixed(3)} feet | ${inputEl.value} feet = ${feetMeter.toFixed(3)} meter`
}

function litersGallonsConverter() {
    const litersGallons = inputEl.value * 0.264
    const gallonLiters = inputEl.value / 0.264
    volumeEl.textContent = `${inputEl.value} liters = ${litersGallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${gallonLiters.toFixed(3)} liters`
}

function kilogramsPoundsConverter() {
    const kilosPounds = inputEl.value * 2.204
    const poundsKilos = inputEl.value / 2.204
    massEl.textContent = `${inputEl.value} kilos = ${kilosPounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${poundsKilos.toFixed(3)} kilos`
}