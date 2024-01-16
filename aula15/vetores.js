var numeros = [8, 1, 7, 4, 2, 9]

// for (c=0; c<numeros.length; c++) {
//     console.log(`o numero ${numeros[c]} esta na posição ${c+1}`)
// }

for ( n in numeros) {
    console.log(`o numero ${numeros[n]} esta na posição ${n}`)
}