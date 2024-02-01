let name = document.querySelector("#names").value
let quantity = document.querySelector("#quantity").value
let product = document.querySelector("input")
let button = document.querySelector("button")
let ul = document.querySelector("ul")
let p = document.querySelector("p")

function Checklist(){
    if (ul.firstChild){
        p.innerHTML = ``
    } else {
        p.innerHTML = `Votre liste est vide`
    }

}

button.addEventListener('click', function(){
    
    ul.innerHTML+=
    `
    <li>${name} ${quantity} ${product.value}<button class="list">X</button></li>
    `
    product.value = ""
    
    Checklist()
   
    let boutons = document.querySelectorAll(".list")
    boutons.forEach(function(bouton){
        bouton.addEventListener('click', function(){
            bouton.parentElement.remove()
            Checklist()

        })     
    })







    ul.innerHTML =
    `<li>${name} ${quantity}x ${product.value}</li>`

    Checklist()

    
})