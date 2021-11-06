function carregar(){
    var msg = window.document.querySelector('div#mensagem')
    var img = window.document.querySelector('img#imagem')
    var hoje = new Date()
    var hora = hoje.getHours()
    msg.innerHTML=`Agora são ${hora} horas.<br/>`
    if (hora<12){
        msg.innerHTML+='Bom dia!'
        img.src = 'manha.png'
        document.body.style.background = '#E1CFC1'
    }else if(hora<18){
        msg.innerHTML+='Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#BF8971'
    }else{
        msg.innerHTML+='Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = '#624967'
    }
}