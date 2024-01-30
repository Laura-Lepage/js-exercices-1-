function Salutation(){
    let prenom = document.querySelector("input")
    let button = document.querySelector("button")
    let p = document.querySelector("p")

    button.addEventListener('click', function(){
        p.innerHTML = "Bonjour " + prenom.value
        
    })
}

Salutation()
