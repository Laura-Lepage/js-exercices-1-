let number = parseInt(document.querySelector("input").value)
let button = document.querySelector("button")
let p = document.querySelector("p")
let nombreEssais = 0



function randomNumber(){
    let min = 0
    let max = 100
    let randomNumb = Math.floor(Math.random() * (max - min)) + min;
    return(randomNumb)
}
console.log(randomNumber());

button.addEventListener('click', function(){
    nombreEssais++
    if (number == randomNumber()){
        p.innerHTML = `Félicitations, tu as gagné en ${nombreEssais} essais!`
    } else {
        if (number>randomNumber()){
            p.innerHTML = `Entrer un nombre plus petit`
        } else {
            p.innerHTML = `Entrer un nombre plus grand`
        }
    }

    if (nombreEssais<=5){


    }
})