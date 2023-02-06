//Remove item function
function removerFilme(event) {
  event.target.parentElement.remove();
}

//Add item function
function adicionarFilme() {
  //Saving the element id
  var novoFilme = document.getElementById("filme").value;
  var elementoListaFilmes = document.getElementById("listaFilmes");
  //Creating the HTML elements
  var divisona = document.createElement("div");
  divisona.classList.add("card-filme");
  var poster = document.createElement("img");
  var botaoDelete = document.createElement("button");
  //Add a class to the button delete for css
  botaoDelete.classList.add("botao-remover-filme")
  //Source and erase element
  poster.src = novoFilme;
  poster.addEventListener("click", removerFilme);
  //Text and erase element
  botaoDelete.innerHTML = "Remover";
  botaoDelete.addEventListener("click", removerFilme);
  //Interweaving everything
  divisona.appendChild(poster);
  divisona.appendChild(botaoDelete);
  elementoListaFilmes.appendChild(divisona);
  //Cleaning the insert box
  document.getElementById("filme").value = "";
}