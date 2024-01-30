let number = parseInt(document.querySelector("input"))
let button = document.querySelector("button")
let p = document.querySelector("p")



function randomNumber(){
    let min = 0
    let max = 100
    let randomNumb = Math.floor(Math.random() * (max - min)) + min;
}

button.addEventListener('click', function(){
    if (number.value>randomNumber()){
        p.innerHTML = `Entrer un nombre plus petit`
    } else {
        p.innerHTML = `Entrer un nombre plus grand`
    }

})