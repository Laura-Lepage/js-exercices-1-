let number = document.querySelector("input")
let button = document.querySelector("button")
let p = document.querySelector("p")
let nombreEssais = 5
let randomNumba = Math.random()*100 //sort le 0 mais, si on veut le 100, il faudra faire +1
let arrondiNumba = Math.round(randomNumba)

function effacer(){
    p.innerHTML = ""
}

function nombreMagique(nombreUtilisateur) {
    nombreEssais--
    if (nombreEssais > 0){
        if (nombreUtilisateur < arrondiNumba){
            p.innerHTML = `Entrer un nombre plus grand`
            setTimeout(effacer, 2000)
        } else if (nombreUtilisateur > arrondiNumba){
            p.innerHTML = `Entrer un nombre plus petit`
            setTimeout(effacer, 2000)
        } else {
            p.innerHTML = `Félicitations, tu as gagné en ${nombreEssais} essai(s)!`
            document.querySelector(".win").style.display = "inline"
            setTimeout(function(){
                p.innerHTML = ``
                document.querySelector(".win").style.display = "none"
            }, 10000)
        }
    } else {
        p.innerHTML = `Toutes les chances sont épuisées`
        document.querySelector(".loose").style.display = "inline"
        setTimeout(function(){
            p.innerHTML = ``
            document.querySelector(".loose").style.display = "none"
        }, 10000)
    }
    number.value = ""
}

button.addEventListener('click', function(){
    nombreMagique(number.value)
})