function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
        if(fano.value.length == 0 || Number(fano.value) > ano ) {
            window.alert('[ERRO]')
        } else {
            var fsex = window.document.getElementsByName('txtsex')
            var idade = ano - Number(fano.value)
           var genero = ''
           var img = document.createElement('img')
           img.setAttribute('id', 'foto')
            if(fsex[0].checked) {
                genero = 'Homem'
                 if(idade >= 0 && idade <= 10) {
                    // Criança
                    img.setAttribute('src', 'bebe.jpg')
                 }
                 else if (idade <= 21) {
                    // Adolescente
                    img.setAttribute('src', 'jovem-m.jpg')
                 } else if (idade < 50) {
                    // Adulto
                    img.setAttribute('src', 'homem-adulto.jpg')
                 } else {
                    // Idoso
                    img.setAttribute('src', 'homem-idoso.jpg')
                 }
            } else {
                genero = 'Mulher'
                if(idade >= 0 && idade <= 10) {
                    // Criança
                    img.setAttribute('src', 'bebe.jpg')
                 }
                 else if (idade <= 21) {
                    // Adolescente
                    img.setAttribute('src', 'jovem-f.jpg')
                 } else if (idade < 50) {
                    // Adulto
                    img.setAttribute('src', 'mulher-adulta.jpg')
                 } else {
                    // Idoso
                    img.setAttribute('src', 'mulher-idosa.jpg')
                 }
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
        }
}