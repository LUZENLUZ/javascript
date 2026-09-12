const { createElement } = require("react")

function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

if (num.value.length == 0) {
    alert('digite um numero')
    
    
} else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while ( c <= 15) {
        
        let item = document.createElement('option')
       tab.appendChild(item)    
        item.text= `${n} x ${c} = ${n*c}`
        
        c++
        
    }
}

}