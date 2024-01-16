var hora = new Date().getHours()
        var minutos = new Date().getMinutes() 
        var msg = document.querySelector('h2#msg')
        var img = document.getElementsByTagName('img')[0]
        var corpo = document.getElementsByTagName('body')[0]
        msg.innerText = `Agora são ${hora} horas e ${minutos} minutos` 

        if (hora <= 6) {
            corpo.style.background = 'darkgray'
            img.src = 'https://3.bp.blogspot.com/-wYc9EdDYfyg/WJvvJoLGRTI/AAAAAAAAE2U/xL4TKCcUMmgw0BPypSD8LkSeHroZQAqFACLcB/s640/Lua.jpg'
        } else if (hora <= 12) {
            corpo.style.background = 'rgb(255, 170, 130)'
            img.src = 'https://st2.depositphotos.com/1067633/7128/i/600/depositphotos_71280025-stock-photo-rooster-weathervane-against-sunrise-with.jpg'
        } else if (hora <= 18) {
            corpo.style.background = 'orange'
            img.src = 'https://www.42frases.com.br/wp-content/uploads/2019/10/frases-de-fim-de-tarde-1.jpg'
        } else if (hora <= 24) {
            corpo.style.background = 'rgb(37, 37, 37)'
            img.src = 'https://i.pinimg.com/originals/a6/2c/24/a62c24f3be912626ee0823bca2900bca.jpg'
        }