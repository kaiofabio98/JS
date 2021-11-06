function contar(){
    var inicio = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#passo')
    var res = window.document.querySelector('div#res')
    
    if(inicio.value.length==0 || fim.value.length==0){
        window.alert('[ERRO]: Impossível contar! Tente novamente')
    }if(passo.value.length==0 || passo.value == 0){
        window.alert('[ERRO]: Impossível utilizar passo 0, considerando passo 1...')
        res.innerHTML='Contando...'
        var begin = Number(inicio.value)
        var end = Number(fim.value)
        var pass = 1
        if(begin<end){
            for(var c=begin;c<=end;c+=pass){
                res.innerHTML += `${c} `
            }
        }else{
            for(var c=begin;c<=end;c-=pass){
                res.innerHTML += `${c} `
            }
        }
    }else{
        res.innerHTML='Contando...'
        var begin = Number(inicio.value)
        var end = Number(fim.value)
        var pass = Number(passo.value)
        if(begin<end){
            for(var c=begin;c<=end;c+=pass){
                res.innerHTML += `${c} `
            }
        }else{
            for(var c=begin;c>=end;c-=pass){
                res.innerHTML += `${c} `
            }
        }
        
        
    }
}