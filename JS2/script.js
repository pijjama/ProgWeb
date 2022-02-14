window.onload =() => {
    jokenpo()
}


function geraJogadaPc(){
    var jogada = parseInt(Math.random()* (4 - 1) + 1);
    if(jogada == 1){
        console.log('O computador jogou Papel')
    }
    if(jogada == 2){
        console.log('O computador jogou Pedra')
    }
    if(jogada == 3){
        console.log('O computador jogou Tesoura')
    }
   return jogada
}

function getJogadaUser(){
    var jogada = parseInt(prompt());
    if(jogada > 3 || jogada < 1){
        return 0
    }
    return jogada
}

function jokenpo(){

    var papel = 1
    var pedra = 2
    var tesoura  = 3

    var pontos = 0

    console.log('Escolha sua jogada:\n1 - Papel \n2 - Pedra\n3 - Tesoura')

    var ju = getJogadaUser()

    while(ju > 0){
        jc = geraJogadaPc()
        if(ju == papel && jc  == pedra){
            console.log('Você ganhou')
            pontos++ 
        }
        if(ju == papel && jc  == tesoura){
            console.log('Você perde! A sua pontuação foi de '+pontos)
            break;
        }
        if(ju == papel && jc  == papel){
            console.log('A rodada empatou!')
        }
        if(ju == pedra && jc  == papel){
            console.log('Você perde! A sua pontuação foi de '+pontos)
            break;
        }
        if(ju == pedra && jc  == tesoura){
            console.log('Você ganhou')
            pontos++ 
        }
        if(ju == pedra && jc  == pedra){
            console.log('A rodada empatou!')
        }
        if(ju == tesoura && jc  == papel){
            console.log('Você ganhou')
            pontos++ 
        }
        if(ju == tesoura && jc  == pedra){
            console.log('Você perde! A sua pontuação foi de '+pontos)
            break;
        }
        if(ju == tesoura && jc  == tesoura){
            console.log('A rodada empatou!')
        }
        ju = getJogadaUser()
    }
    if(ju == 0){
        console.log("Você perdeu! A sua pontuação foi de " + pontos)
    }
    
}