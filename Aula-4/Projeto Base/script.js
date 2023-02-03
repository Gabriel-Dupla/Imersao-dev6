//Variáveis dos filmes
var listaFilmes = ['https://assets-prd.ignimgs.com/2022/11/02/fgkhcenveaabm1c-1667405323085.jpg', 'https://jardimdasamericas.com.br/uploads/2022/12/capa-filme-gato-de-botas-2-o-ultimo-pedido-784dc-large.jpg', 
'https://media.fstatic.com/diCmRK6zRC5EUjBx5NYu5TFYMog=/322x478/smart/filters:format(webp)/media/movies/covers/2017/10/MV5BNjZmZTMwNzgtZmJiOC00ZTVlLTk2ZjktMjI1Mjg4NTc3MTAwXkEyXkFqcGdeQX_saAfEMS.jpg', 'https://resenhandosonhos.com/wp-content/uploads/2022/06/invincible-poster.jpg', 'https://talenthouse-res.cloudinary.com/image/upload/c_limit,h_1000,w_1000/v1/user-919216/profile/ykrmdvwurjp2hjov5b3x.jpg', 'https://br.web.img3.acsta.net/pictures/17/04/19/21/08/577190.jpg'];


var filmeExiste = false;

function salvarFilme() {
    var novoFilme = document.getElementById('adicionarFilme').value;
    var elementosListaFilmes = document.getElementById('listaFilmes');
    elementosListaFilmes.innerHTML = elementosListaFilmes.innerHTML + '<img src=' +  novoFilme + '>';
    document.getElementById('filme').value = '';
     
}
