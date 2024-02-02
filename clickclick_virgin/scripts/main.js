let koalas = document.querySelector('.koalas')

koalas.addEventListener('click', function(e){
  
    e.target.classList.add("cross")
    koalas.classList.remove("cross")
  
})

// document.querySelector('koalas').addEventListener("click", function(e){
//     if(e.target.hasAttribute("title")){
//         e.target.classList.add("cross")
//     }
// })