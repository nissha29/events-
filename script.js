const form = document.querySelector('.form')
const inputname = document.querySelector('.name1')
const inputgender = document.querySelector('.gender')
const inputage = document.querySelector('.age')
const inputedc = document.querySelector('.edc')

const name2 = document.querySelector('.name2')
const gender2 = document.querySelector('.gender2')
const age2 = document.querySelector('.age2')
const edc2 = document.querySelector('.edc2')

form.addEventListener('submit', function(event){
    event.preventDefault();

    const inputName = inputname.value
    name2.innerHTML = inputName
    const inputGender = inputgender.value
    gender2.innerHTML = inputGender
    const inputAge = inputage.value
    age2.innerHTML = inputAge
    const inputEdc = inputedc.value
    edc2.innerHTML = inputEdc
})
