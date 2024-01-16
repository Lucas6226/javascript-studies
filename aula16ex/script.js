var adicionar = document.querySelector('input#adicionar')
adicionar.addEventListener('click', clicou)

var soma = 0
var maior = -1
var menor = 101
var media = 0 
var numeros = []
var res = document.querySelector('div#resposta')
function clicou() {
    var numero = Number(document.querySelector('input#numero').value) // aqui

    if (numeros.indexOf(numero) == -1 && numero < 101 && numero > 0 && numero != 0) {
        res.innerHTML = ''

        var option = document.createElement('option')
        option.innerText = `Valor ${numero} adicionado.`
    
        var select = document.querySelector('select#lista')
        select.appendChild(option)

        if (numero > maior) {
            maior = numero
        }
        if (numero < menor) {
            menor = numero
        }

        soma += numero

        numeros.push(numero)
    } else {
        window.alert('[ERRO] Numero invalido ou ja adicionado')
    }
 
}



var finalizar = document.querySelector('input#finalizar')
finalizar.addEventListener('click', verDados)

function verDados() {
    if (numeros.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${numeros.length} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}`
        res.innerHTML += `<p>A media dos valores digitados é ${soma/numeros.length}`
    }
    
    numeros = []
}