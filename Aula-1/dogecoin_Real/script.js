//Variáveis de reagente
var valorReal = prompt("Quanto reais quer converter?");
var cotacaoDaDogecoin = 0.45;
var cotacaoDolar = 5.09;
var cotacaoDoEuro = 5.53;

//Variáveis de produto
var valorEmDolar = (valorReal * cotacaoDolar).toFixed([2]);
var valorEmDogecoin = (valorReal * cotacaoDaDogecoin).toFixed([2]);
var valorEmEuro = (valorReal * cotacaoDoEuro).toFixed([2]);

alert("A quantidade de R$" + valorReal + " reais em dólar, dogecoin e euro respectivamente é: US$" + valorEmDolar + ", " + valorEmDogecoin + " e Є" + valorEmEuro);