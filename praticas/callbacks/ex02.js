const mostrar_barras = msg => {
    console.log("=== " + msg + " ===")
}
const mostrar_xis = msg => {
    console.log("XXX " + msg + " XXX")
}
const mostrar_linha = msg => {
    console.log("--- " + msg + " ---")
}


const somar = (a, b, cb) => {
    let soma = a + b
    cb(soma) 
}

somar(2, 2, mostrar_barras)
somar(2, 2, mostrar_xis)
somar(2, 2, mostrar_linha)