function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML  = `Agora são ${hora} horas`
        if(hora < 12) {
            imagem.src = "imagemmanha.jpg"
            document.body.style.background = '#e0cd5f'
        } else if (hora >= 12 && hora <=19) {
            imagem.src = "imagemtarde.jpg"
            document.body.style.background = '#b9846f'
        } else {
           imagem.src = "imagemnoite.jpg"
            document.body.style.background = '#515154'
        }
}