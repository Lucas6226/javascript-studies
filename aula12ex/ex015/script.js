var botao = document.querySelector('input#botao')
botao.addEventListener('click', enviar)

function enviar() {
    var nascimento = document.getElementById('nac')
    var nascimento = Number(nascimento.value) //para pegar o ano de nascimento
    var ano = new Date().getFullYear() //para pegar o ano atual
    var idade = (ano - nascimento) // para calcular a idade
    
    var masculino = document.querySelector('input#sexo0').checked

    var res = document.querySelector('h2#resposta')
    imagem = document.getElementsByTagName('img')[0]
    imagem.style.height = '200px'
    imagem.style.width = '200px'

    if (nascimento == 0 || nascimento < 1910 || nascimento > ano) {
        res.style.color = 'red'
        res.innerText = '[ERRO] Prencha todos os campos corretamente'
    } else {
        if (masculino) {
            if (idade <= 15) {
                res.innerText = `Detectado homem de ${idade} anos`
                imagem.src = 'https://leiturinha.com.br/blog/wp-content/uploads/2022/01/iStock-1166576788-1.jpg'
            } else if (idade <= 24) {
                res.innerText = `Detectado homem de ${idade} anos`
                imagem.src = 'https://www.geru.com.br/_next/static/media/home-bg-1.8728e4de.webp'
            } else if (idade <= 50) {
                res.innerText = `Detectado homem de ${idade} anos`
                imagem.src = 'https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg'
            } else {
                res.innerText = `Detectado homem de ${idade} anos`
                imagem.src = 'https://img.freepik.com/fotos-premium/homem-idoso-branco-com-cabelo-branco-sorrindo-em-um-fundo-cinza_53876-159704.jpg?w=2000'
            }
        } else {
            if (idade <= 15) {
                res.innerText = `Detectado mulher de ${idade} anos`
                imagem.src = 'https://passosdacrianca.org.br/wp-content/uploads/post-1.jpg'
            } else if (idade <= 24) {
                res.innerText = `Detectado mulher de ${idade} anos`
                imagem.src = 'https://img.freepik.com/fotos-gratis/mulher-jovem-e-bonita-em-sueter-rosa-quente-aparencia-natural-sorridente-retrato-ligado-isolado-cabelo-comprido_285396-896.jpg'
            } else if (idade <= 50) {
                res.innerText = `Detectado mulher de ${idade} anos`
                imagem.src = 'https://images.freeimages.com/images/premium/previews/2592/25929716-adult-woman.jpg'
            } else {
                res.innerText = `Detectado mulher de ${idade} anos`
                imagem.src = 'https://img.freepik.com/fotos-gratis/mulher-africana-idosa-sorridente-retrato-de-rosto_53876-143107.jpg?w=2000'
            }
        }
    }


}