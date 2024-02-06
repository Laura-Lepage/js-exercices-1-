let poids = document.querySelector(".poids")
let taille = document.querySelector(".taille")
let button = document.querySelector("button")
let p = document.querySelector("p")
let imc = 0

function calculimc(weight, height){
    let imc = (weight / (height*height)).toFixed(1) //jusqu'à la première décimale
    if (imc < 18.5){
        p.innerHTML=`Votre IMC est de ${imc}, vous êtes en insuffisance pondérale`
    } else if (imc < 25){
        p.innerHTML=`Votre IMC est de ${imc}, vous êtes en corpulence normale`
    } else if (imc < 30){
        p.innerHTML=`Votre IMC est de ${imc}, vous êtes en surpoids`
    } else if (imc < 35){
        p.innerHTML=`Votre IMC est de ${imc}, vous êtes en obésité modérée`
    } else if (imc < 40){
        p.innerHTML=`Votre IMC est de ${imc}, vous êtes en obésité sévère`
    } else {
        p.innerHTML=`Votre IMC est de ${imc}, vous êtes en obésité morbide ou massive`
    }
    poids.value = ""
    taille.value = ""
}

button.addEventListener('click', function(){
    calculimc(parseFloat(poids.value), parseFloat(taille.value))
})