var form = document.getElementById("formulario")

function criarTarefa(event){
  event.preventDefault()
}

form.addEventListener('submit', criarTarefa)