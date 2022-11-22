function calcular() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('selnum')
    if (num.value.length == 0) {
        window.alert ('Por Favor, Insira um Valor')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`
            tab.appendChild(item)
            c++
        }
    }
}