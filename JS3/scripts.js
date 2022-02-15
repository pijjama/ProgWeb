let incrementar = counter(1)

function counter(a){
    var b = a
    return function N(){
        b++
        return b
    }
}

console.log('Primeira chamada ' + incrementar())
console.log('Segunda chamada ' + incrementar())
console.log('Terceira chamada ' + incrementar())
