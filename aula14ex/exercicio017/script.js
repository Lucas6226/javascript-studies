var botao = document.querySelector('input#botao')
botao.addEventListener('click', clicou)

function clicou() {
    numero = document.querySelector('input#numero').value
    tabuada = document.querySelector('select#tabuada')

    select = document.getElementsByTagName('select')[0]
    select.style.display = 'block'

    if (numero.length == 0) {
        window.alert('[ERRO] Digite um numero por favor.')
    } else {
        for (c=0; c<=9; c++) {
            var option = document.createElement('option')
            tabuada.appendChild(option)
            exp = document.getElementsByTagName('option')[c]
            exp.innerText = `${numero} X ${c+1} = ${numero*c+1}`
        }
    }
}