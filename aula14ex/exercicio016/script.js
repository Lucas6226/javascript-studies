var botao = document.querySelector('input#botao')
botao.addEventListener('click', clicou)

function clicou() {
    res = document.querySelector('p#resultado')
    res.innerText = ''
    inicio = Number(document.querySelector('input#inicio').value)
    fim = Number(document.querySelector('input#fim').value)
    passo = Number(document.querySelector('input#passo').value)

    if (passo == 0 || passo < 0)  {
        window.alert('[ERRO] passo invalido')
    } else {
        for (c=inicio; c<fim+1; c+=passo) {
            res.innerText += `${c} 👉🏼`
        }
        res.innerText += '🏁'
    }


}