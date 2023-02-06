var paulo = {
  nome:'Paulo',
  vitoria:0,
  empate:0,
  derrota:0,
  pontos:0
  
}
var rafa = {
  nome:'Rafa',
  vitoria:0,
  empate:0,
  derrota:0,
  pontos:0
  
}

var gui = {
  nome:'Gui',
  vitoria:0,
  empate:0,
  derrota:0,
  pontos:0
  
}

var renato = { 
  nome:'Renato',
  vitoria:0,
  empate:0,
  derrota:0,
  pontos:0
  
}

var listaJogadores = [paulo, rafa, gui, renato];

var elementoTabela = document.getElementById('tabelaJogadores');


function exibirNaTela() {
  elementoTabela.innerHTML = '';
  listaJogadores.forEach((jogador)=>{
  elementoTabela.innerHTML += 
        `<tr>
          <td>${jogador.nome}</td>
          <td>${jogador.vitoria}</td>
          <td>${jogador.empate}</td>
          <td>${jogador.derrota}</td>
          <td>${jogador.pontos}</td>
          <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
          <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
        </tr>
       `
  })
}
exibirNaTela();
  





function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTela();
}

function adicionarEmpate(jogador) {
  jogador.empate++;
  jogador.pontos++;
  exibirNaTela();

}


function adicionarDerrota(jogador) {
  jogador.derrota++;
  exibirNaTela();
   
}
