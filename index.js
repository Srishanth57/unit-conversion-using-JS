/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthElm = document.getElementById("length-elm")
const volumeElm =document.getElementById("volume-elm")
const massElm = document.getElementById("mass-elm")
let output = ''
let num = ""
let inputElm = document.getElementById("input-elm")
let renderBtn = document.getElementById("render")
function showLength(value1, value2, str1, str2){
    
    output =   `${num} ${str1} = ${value1} ${str2} | ${num} ${str2} = ${value2} ${str1}`
    lengthElm.textContent = output 
}
function showVolume(value1, value2, str1, str2){
    
    output =   `${num} ${str1} = ${value1} ${str2} | ${num} ${str2} = ${value2} ${str1}`
    volumeElm.textContent = output 
}
function showMass(value1, value2, str1, str2){
    output =   `${num} ${str1} = ${value1} ${str2} | ${num} ${str2} = ${value2} ${str1}`
    massElm.textContent = output 
}
renderBtn.addEventListener("click", function(){
    num = inputElm.value 
    let metersTofeet = (Number(num)*3.281).toFixed(3)
    let feetTometers = (Number(num)/3.281).toFixed(3)
    showLength(metersTofeet, feetTometers ,"meters" , "feet")
    document.body.classList.add("color")
    
})
renderBtn.addEventListener("click", function(){
    num = inputElm.value 
    let litersToGallon = (Number(num)*0.264).toFixed(3)
    let gallonToLiters = (Number(num)/0.264).toFixed(3)
    showVolume(litersToGallon, gallonToLiters ,"liters" , "gallons")
    document.body.classList.add("color")
    
})
renderBtn.addEventListener("click", function(){
    num = inputElm.value 
    let kgToPounds = (Number(num)*2.204).toFixed(3)
    let poundsToKg = (Number(num)/2.204).toFixed(3)
    showMass(kgToPounds, poundsToKg ,"kilos" , "pounds")
    document.body.classList.add("color")
    
})

