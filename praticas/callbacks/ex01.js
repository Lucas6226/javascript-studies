const função = callback => {
    const valor = 20

    callback(valor)
}

função(numero => {
    console.log(numero)
})
