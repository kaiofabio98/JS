var generate = window.document.querySelector(".gerar")

function tabuada(){
    var valor = window.document.querySelector("input#number")
    var val = Number(valor.value)
    var x1 = window.document.querySelector('.x1')
    var x2 = window.document.querySelector('.x2')
    var x3 = window.document.querySelector('.x3')
    var x4 = window.document.querySelector('.x4')
    var x5 = window.document.querySelector('.x5')
    var x6 = window.document.querySelector('.x6')
    var x7 = window.document.querySelector('.x7')
    var x8 = window.document.querySelector('.x8')
    var x9 = window.document.querySelector('.x9')
    var x10 = window.document.querySelector('.x10')

    if(valor.value.length == 0){
        window.alert('Por favor, digite um número para gerar a tabuada.')
    }else{
        x1.innerHTML=`${val} x 1 = ${val*1}`
        x2.innerHTML=`${val} x 2 = ${val*2}`
        x3.innerHTML=`${val} x 3 = ${val*3}`
        x4.innerHTML=`${val} x 4 = ${val*4}`
        x5.innerHTML=`${val} x 5 = ${val*5}`
        x6.innerHTML=`${val} x 6 = ${val*6}`
        x7.innerHTML=`${val} x 7 = ${val*7}`
        x8.innerHTML=`${val} x 8 = ${val*8}`
        x9.innerHTML=`${val} x 9 = ${val*9}`
        x10.innerHTML=`${val} x 10 = ${val*10}`
    }

}

generate.addEventListener('click', tabuada)