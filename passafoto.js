var imagens = ["perfil-adriel1.jpg", "perfil-adriel1.png", "perfil-adriel2.jpeg", "perfil-adriel3.jpeg" ];
var imagemAtual = 0;
var tempo = 1800;

function trocarImagem(){
    imagemAtual = (imagemAtual +1) % 4;
    document.querySelector('.imagem-perfil img').src = imagens[imagemAtual];
}

setInterval(trocarImagem, tempo);