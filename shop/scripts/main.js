let panier = document.querySelector(".count")
let boutons = document.querySelectorAll(".add")
let currentPrice = 0
let prixTot = 0

boutons.forEach(function(bouton){
    bouton.addEventListener('click', function(){
        panier.innerHTML++
        currentPrice = bouton.previousElementSibling.innerText
        currentPrice = parseInt(currentPrice.slice(0, -1))
        prixTot = prixTot + currentPrice
        document.querySelector("h3").setAttribute("title", "Le prix total du panier s'élève à : " + prixTot + "€")
    })
})