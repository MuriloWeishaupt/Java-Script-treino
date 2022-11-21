function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var pas = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    var i = Number(txti.value)
    var f = Number(txtf.value)
    var p = Number(txtp.value)

    if (ini.value.length ==  0 || fim.value.length == 0 || pas.value.length == 0) {
       window.alert  ('[ERRO] Dados Incompletos')
    } else {
       res.innerText = ('Contando...')}
        if (p == 0) {
            window.alert('Passo Inválido, Considerando PASSO 1')
            p = 1
        }
       if (i < f) {
        for (c = i; c <= f; c+= p) {
            res.innerText += (`${c} \u{1F449}`)
            
        }
       } else {
        for (c = i; c >= f; c-= p) {
            res.innerText += (`${c} \u{1F449}`)
       }
    } res.innerText += ('\u{1F3C1}')
}