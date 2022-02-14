function bemvindo(local) {
    alert('Seja bem vindo ao '+local+'!');
}

function mult(a,b){
    return a*b
}

window.onload =() => {

    for(j = 1 ; j <= 10 ; j++){
        var div = document.createElement('div')

        var divNome = document.createElement('div')
        var conteudo = document.createTextNode("Produtos de "+j+" \n")
        divNome.appendChild(conteudo)
        div.appendChild(divNome).className = "title"

        for(i = 1; i <= 10 ; i++){
            var divj = document.createElement('div')
            var divCalc = document.createElement('div')
            var conteudoCalc = document.createTextNode(j +"x"+i)
            divCalc.appendChild(conteudoCalc)
            var divResp = document.createElement('div')
            var conteudoResposta = document.createTextNode(j*i) 
            divResp.appendChild(conteudoResposta)

            divj.appendChild(divCalc).className ="col"
            divj.appendChild(divResp).className ="col"
            div.appendChild(divj).className ="row"
            document.body.appendChild(div).className = "container"
        } 
    } 
} 