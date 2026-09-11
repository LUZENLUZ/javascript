function carregar () {
    var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = 11

msg.innerHTML = `AGORA SÃO ${hora} HORAS`


if (hora >= 0 && hora < 12) {
    /*bom dia*/
    img.src = 'manhã2.jpg'
}
else if (hora < 18) {
    /* boa tarde */
   img.src = 'tarde2.jpg'
   document.body.style.background = '#f74904b4'
} else {
    /* boa noite */
   img.src = 'noite2.jpg'
   document.body.style.background = 'gray'
}
}


