function imparPar(n) {
    if (n%2==0) {
        return `O numero ${n} é Par`
    } else {
        return `O numero ${n} é Impar`
    }
}

let numero = imparPar(8)
console.log(numero)
console.log(imparPar(3))

//resultado 
// O numero 8 é Par 
// O numero 3 é Impar