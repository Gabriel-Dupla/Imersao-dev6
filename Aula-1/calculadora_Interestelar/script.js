var nome = prompt("Bem vindo! Qual é o seu Nome ?");
var valorEmAnosLuz = prompt(
  nome + ", quantos anos Luz deseja converter metros?"
);
var anosLuzEmMetros = 9460000000000;
var quantidadeEmMetros = valorEmAnosLuz * anosLuzEmMetros;

alert(
  nome +
    ", " +
    valorEmAnosLuz +
    " anos luz é " +
    quantidadeEmMetros +
    " metros."
);
