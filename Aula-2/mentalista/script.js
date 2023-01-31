//Variáveis 
var numeroLimite = prompt("Até que número deseja sorteiar?");
var numeroSecreto = parseInt(Math.random() * numeroLimite) + 1;


var contador = 0;
var quantidade = 3;

//Jogo
while (chute != numeroSecreto && contador < quantidade) {
  var chute = prompt("Digite um número entre  1 e " + numeroLimite);
  if (chute == numeroSecreto) {
    alert("Acertou!");

  } else if (chute > numeroSecreto) {
    alert("Não foi dessa vez, o número escolhido (" + chute + ") é maior que o número secreto.");

  } else {
    alert("Errou.... o número escolhido (" + chute + ") é menor que o número secreto.");

  }
  contador++
}

//Mostrar no console o numero
console.log(numeroSecreto);