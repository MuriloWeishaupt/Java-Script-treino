function calcular() {
        let = ini = window.document.getElementById('txti')
        let = fim = window.document.getElementById('txtf')
        let pas = window.document.getElementById('txtp')
        let res = window.document.getElementById('res')

        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        

        if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
            window.alert('[ERRO] Insira os Valores Necessários!')
        } else {
            res.innerHTML = 'Contando...'
           }
            if(i < f) {
                for(c = i; c <= f; c+= p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            } else {
                for(c = i; c >= f; c-= p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
           
        } res.innerHTML += `\u{1F3C1}`
