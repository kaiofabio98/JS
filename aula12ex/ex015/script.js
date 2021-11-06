form.style.textAlign='center'
function verificar(){
    var nascimento = window.document.querySelector('input#txtano')
    var nas = Number(nascimento.value)
    var resultado = window.document.querySelector('div#res')
    var hoje = new Date()
    var ano = hoje.getFullYear()
    var idade = ano-nas

    if (nas>ano || nascimento.value.length==0){
        window.alert('[ERRO]: Dados inválidos, tente novamente')
    }else {
        var sexo = window.document.getElementsByName('radsex')
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero='Homem'
            if (idade <=15) {
               img.setAttribute('src','hjovem.png')
            }else if (idade >15 && idade <=59) {
                img.setAttribute('src', 'hadulto.png')
            }else {
                img.setAttribute('src', 'hvelho.png')
            }

        }else{
            genero='Mulher'
            if(idade<=15){
                img.setAttribute('src','mjovem.png') 
             }else if(idade>15 && idade<=59){
                 img.setAttribute('src', 'madulta.png')
             }else{
                 img.setAttribute('src', 'mvelha.png')
             }
        }
        resultado.style.textAlign='center'
        resultado.innerHTML=`<p>${genero} com ${idade} anos</p>`
        resultado.appendChild(img)
        
    }
}