/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// grabbing the ids and storing them in variables.
let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")

let meterFeetRel = document.getElementById("meterFeetRel")
let literGallonRel = document.getElementById("literGallonRel")
let kilogramPoundRel = document.getElementById("kilogramPoundRel")

// convert button 
convertBtn.addEventListener("click", function(){
    let inputValue = inputEl.value // storing the value of input in a new variable called inputValue
    if(inputValue === ""){ // if the inputValue is empty 
        alert("You have to add a number to proceed!!") // show a message to write numbers to proceed
        return
    } 
    // if not render this functions values
        meterFeetConversion(inputValue) // function of meter and feet with paramater set to inputValue
        literGallonConversion(inputValue) // function of liter and gallon with paramater set to inputValue
        kilogramPoundConversion(inputValue)// function of kilogram and pound with paramater set to inputValue
})


function meterFeetConversion(num){ // num would be the inputValue
    let meter = (num * 3.281).toFixed(2) // to get any meter you have to multiply the num with 3.281
    let feet = (num / 3.281).toFixed(2) // to get any feet you have to divide the num with 3.281
    meterFeetRel.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters` //  holding meterFeetRel to display answer.
}

function literGallonConversion(num){ // num would be the inputValue
    let liter = (num * 0.264).toFixed(2) // to get any liter you have to mulitply the num with 0.264
    let gallon = (num / 0.264).toFixed(2) // to get any gallon you have to divide the num wiht 0.264
    literGallonRel.textContent = `${num} liters = ${gallon} gallons | ${num} gallons = ${liter} liters` // holding literGallonRel to display answer.
}

function kilogramPoundConversion(num){ // num would be the inputValue
    let kilo = (num * 2.204).toFixed(2) // to get any kilo you have to multiply the num with 2.204
    let pound = (num / 2.204).toFixed(2) // to get any pound you have to divide the num with 2.204
    kilogramPoundRel.textContent = `${num} kilos = ${pound} pounds | ${num} pounds = ${kilo} kilos` // holding kilogramPoundrel to display the answer.
}