var uau = {
  nome:'Uau',
  avatar:'https://i.imgur.com/Bq83LBY.png',
  vitoria:0,
  empate:0,
  derrota:0,
  pontos:0
  
}
var terno = {
  nome:'Terninho',
  avatar:'https://i.imgur.com/WnmTRMV.png',
  vitoria:0,
  empate:0,
  derrota:0,
  pontos:0
  
}

var scrum = {
  nome:'Scrum',
  avatar:'https://i.imgur.com/03sdYc8.png',
  vitoria:0,
  empate:0,
  derrota:0,
  pontos:0
  
}

var hug = { 
  nome:'Abraços',
  avatar:'https://i.imgur.com/GH2TrWo.png',
  vitoria:0,
  empate:0,
  derrota:0,
  pontos:0
  
}

var listaJogadores = [uau, terno, scrum, hug];

var elementoTabela = document.getElementById('tabelaJogadores');


function exibirNaTela() {
  elementoTabela.innerHTML = '';
  listaJogadores.forEach((jogador)=>{
  elementoTabela.innerHTML += 
        `<tr>
          <td>${jogador.nome}</td>
          <td><img src='${jogador.avatar}' class='avatar'></td>
          <td>${jogador.vitoria}</td>
          <td>${jogador.empate}</td>
          <td>${jogador.derrota}</td>
          <td>${jogador.pontos}</td>
          <td><button onClick="adicionarVitoria(${listaJogadores.indexOf(jogador)})">Vitória</button></td>
          <td><button onClick="adicionarEmpate()">Empate</button></td>
        </tr>
       `
  })
}
exibirNaTela();
  
function adicionarVitoria(index) {
  listaJogadores.forEach((jogador)=>{
    if (jogador == listaJogadores[index]){
      listaJogadores[index].vitoria++;
      listaJogadores[index].pontos+=3;
      
    } else {
      jogador.derrota++;
      
      
    }
    
  })
  exibirNaTela();
  
}

function adicionarEmpate(jogador) {
  listaJogadores.forEach((jogador)=>{
    jogador.empate++;
    jogador.pontos++;
     
  })
  exibirNaTela();

}

function adicionarJogador() {
  var nomeJogador = prompt('Insira o nome do jogador');
  var imagemJogador = prompt('Insira a foto de perfil');
  var novoJogador = {
    nome: nomeJogador,
    avatar: imagemJogador,
    pontos: 0,
    vitoria: 0,
    empate: 0,
    derrota: 0,
  }
  
  listaJogadores.push(novoJogador);
  zerarPontos();  
  exibirNaTela();
}

function zerarPontos() {
  for(var i in listaJogadores) {
    listaJogadores[i].pontos = 0
    listaJogadores[i].vitoria = 0
    listaJogadores[i].empate = 0
    listaJogadores[i].derrota = 0
    
  }
  exibirNaTela();
  
}