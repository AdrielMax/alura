var imagens = ["_imagens/perfil-adriel1.jpg", "_imagens/perfil-adriel1.png", "_imagens/perfil-adriel2.jpeg", "_imagens/perfil-adriel3.jpeg" ];
var imagemAtual = 0;
var tempo = 2000;

function trocarImagem(){
    imagemAtual = (imagemAtual +1) % 4;
    document.querySelector('.imagem-perfil img').src = imagens[imagemAtual];
}

setInterval(trocarImagem, tempo);