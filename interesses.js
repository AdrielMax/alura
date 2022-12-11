const LISTA_INTERESSES = document.querySelectorAll('.icones-interesses')

for(let i = 0; i < LISTA_INTERESSES.length; i++) {
    const INTERESSE = LISTA_INTERESSES[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const descricoesInteresses = {
    'interesse-marvel': 'Até acho a DC legal, mas amo o Universo Marvel. Não perco um lançamento, sempre compro o ingresso na  pré-estreia. (Extra: Meu personagem favorito é o Dr. Estranho)',
    'interesse-nintendo':'Gosto muito de games, principalmente os clássicos da Nintendo, até hoje ainda passo uma tarde ou outra tentando zerar Super Mario ou Mortal Kombat direto.',
    'interesse-netflix': 'Sempre amei cinema, mas não há nada como passar um dia chuvoso marantonando série com a amada.',
    'interesse-surf': 'Eu não gosto de futebol. Minha paixão é pelos esportes radicais. Ainda tenho meu velho skate da adolecência, e quando dá, arrisco um ollie aqui ou um flip ali...',
    'interesse-filha': 'Sou extrovertido e tenho vários passatempos, mas aquele que mais me revigora é brincar e passear com minha filha.'
}

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesse')
    let caixaDisplay = document.querySelector('#caixa-texto-interesses')

    caixaDisplay.classList.remove('display-informacoes-interesses')

    texto.innerHTML = descricoesInteresses[idInteresse] || ''
}