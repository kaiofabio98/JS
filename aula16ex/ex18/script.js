let nums = []
var val = window.document.querySelector('.numadd')
var info = window.document.querySelector('select#table')
var add = window.document.querySelector('button#add')
var end = window.document.querySelector('button#end')
var res = window.document.querySelector('div#res')

function adicionar(n){
    nums.push(n)
    info.innerHTML+=`O número ${n} foi adicionado a lista`
}

function imprimir(){
    var soma = 0
    
    nums.sort()
    
    for(var pos in nums){
        soma+=nums[pos]
    }

    var media = soma/nums.length
    res.innerHTML+=`Ao todo, temos ${nums.length} números cadastrados.
    O maior valor informado foi ${nums[num.length]}.
    O menor valor informado foi ${nums[0]}.
    Somando todos os valores temos ${soma}. 
    A média dos valores digitados é ${media}.`  
}

add.addEventListener('click', adicionar(val))

end.addEventListener('click', imprimir())