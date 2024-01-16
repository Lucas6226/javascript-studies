import s from './soma.js'
//import {diminuir, multiplicar, dividir} from './anothers.js'  <-- working, but dont are the best way 
// because it is not pratical  
import * as operations from './anothers.js';

console.log(s(5, 2))

// console.log(diminuir(5, 2))
// console.log(multiplicar(5, 2))
// console.log(dividir(5, 2))

console.log(operations.diminuir(5, 2))
console.log(operations.multiplicar(5, 2))
console.log(operations.dividir(5, 2))