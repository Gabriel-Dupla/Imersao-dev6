
function conversao() {
  var celsius = Number(document.getElementById("number").value);
  var valorEmFahrenheit = (celsius * (9 / 5) + 32).toFixed(2);
  var valorEmKelvin = (celsius + 273.15).toFixed(2);


  document.getElementById("result").innerText =
    "A conversão de " + celsius + " C° para Fahrenheit é " + valorEmFahrenheit;

  document.getElementById("result2").innerText =
    "A conversão de " + celsius + " C° para Kelvin é " + valorEmKelvin;
}

