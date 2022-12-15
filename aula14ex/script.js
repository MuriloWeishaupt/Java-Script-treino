function calcular() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    var n = Number(num.value)

    if(num.value.length == 0) {
        window.alert('Por Favor, Digite um valor!')
    } else {
        var c = 1
        tab.innerText = ``
        while(c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
        }
    }
}