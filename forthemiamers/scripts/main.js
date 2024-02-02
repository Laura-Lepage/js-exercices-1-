let nom = document.querySelector("#names")
let quantity = document.querySelector("#quantity")
let product = document.querySelector("input")
let button = document.querySelector("button")
let ul = document.querySelector("ul")
let p = document.querySelector("p")
let tableau = []

function Checklist(){
    if (ul.childElementCount != 0){
        p.innerHTML = ``
    } else {
        p.innerHTML = `Votre liste est vide` 
    }
}

button.addEventListener('click', function(){
    tableau.push({nom:nom.value, quantité:quantity.value, produit: product.value})
    
    ul.innerHTML+=
    `
    <li>${tableau[tableau.length-1].nom} ${tableau[tableau.length-1].quantité} ${tableau[tableau.length-1].produit}<button class="list">X</button></li>
    `
    product.value = ""
    
    Checklist()
   
    let boutons = document.querySelectorAll(".list")
    boutons.forEach(function(bouton){
        bouton.addEventListener('click', function(){
            bouton.parentElement.remove()
            p = document.querySelector("p")
            Checklist()
        })     
    })    
})