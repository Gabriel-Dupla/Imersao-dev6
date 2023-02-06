//Variáveis dos filmes
var catalogo = ['https://assets-prd.ignimgs.com/2022/11/02/fgkhcenveaabm1c-1667405323085.jpg', 'https://jardimdasamericas.com.br/uploads/2022/12/capa-filme-gato-de-botas-2-o-ultimo-pedido-784dc-large.jpg', 
'https://media.fstatic.com/diCmRK6zRC5EUjBx5NYu5TFYMog=/322x478/smart/filters:format(webp)/media/movies/covers/2017/10/MV5BNjZmZTMwNzgtZmJiOC00ZTVlLTk2ZjktMjI1Mjg4NTc3MTAwXkEyXkFqcGdeQX_saAfEMS.jpg', 'https://resenhandosonhos.com/wp-content/uploads/2022/06/invincible-poster.jpg', 'https://talenthouse-res.cloudinary.com/image/upload/c_limit,h_1000,w_1000/v1/user-919216/profile/ykrmdvwurjp2hjov5b3x.jpg', 'https://br.web.img3.acsta.net/pictures/17/04/19/21/08/577190.jpg'];

var nomes = ['The Last Of Us', 'Gato de Botas 2', 'Berserk 1997', 'Invincible', 'Superman Lives', 'Corra!'];

var trailers = ['https://www.youtube.com/watch?v=uLtkt8BonwM', 'https://www.youtube.com/watch?v=sLk94T-hS78', 'https://www.youtube.com/watch?v=IXL5r3n862U'];

//Pegando a div do css
var listaFilmes = document.querySelector('#listaFilmes');

function imprimirNaTela() {
  //Limpando campo
  listaFilmes.innerHTML = '';
  for (var i = 0; i < catalogo.length; i++) {
    //criando elemento no mundo html
    var divisao = document.createElement('div');
    var poster =  document.createElement('img');
    var titulo =  document.createElement('h1');
    var ancora = document.createElement('a');
    //definindo ref da imagem e texto
    poster.src = catalogo[i];
    titulo.innerText = nomes[i];
    ancora.href = trailers[i];
    ancora.target = '_blank';
    //englobando na div os elementos
    divisao.appendChild(poster);
    divisao.appendChild(titulo);
    listaFilmes.appendChild(divisao);
    ancora.appendChild(divisao);
    listaFilmes.appendChild(ancora);

  }
}

function adicionarFilme() {
    var linkFilme = document.querySelector('#filme').value;
    var nomeFilme = document.querySelector('#titulo').value;
    var remover = document.createElement("button");
    remover.classList.add("remover-filme");
     if (catalogo.includes(linkFilme) || nomes.includes(nomeFilme)) {
        alert('Olha o catálogo, já tem!')
    } else if(linkFilme.endsWith('jpg')){
        catalogo.push(linkFilme);
        nomes.push(nomeFilme);
        imprimirNaTela();
    } else {
      alert('Apenas aceitamos .jpg')
    }
}

imprimirNaTela();