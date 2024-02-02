let number = document.querySelector("input")
let button = document.querySelector("button")
let p = document.querySelector("p")
let nombreEssais = 0
let randomNumba = Math.random()*100
let arrondiNumba = Math.round(randomNumba)
console.log(arrondiNumba);

function nombreMagique(nombreUtilisateur) {
    nombreEssais++
    if (nombreEssais < 5){
        if (nombreUtilisateur < arrondiNumba){
            p.innerHTML = `Entrer un nombre plus grand`
            setTimeout(function(){
                p.innerHTML = ``
            }, 2000)
        } else if (nombreUtilisateur > arrondiNumba){
            p.innerHTML = `Entrer un nombre plus petit`
            setTimeout(function(){
                p.innerHTML = ``
            }, 2000)
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