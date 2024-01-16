// const list = [
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     [1, 2, 3, 4, 5, 6, 7, "lucas", "pedro"],
//     ["lucas", "pedro", "joão", "alexandre"]
// ]

// let newList = list[0].reduce((acc, item) => {
//     return acc + item
// }, 0)
// console.log(newList)





const list = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, "lucas", "pedro"],
    ["lucas", "pedro", "joão", "alexandre"]
]

let newList = list[1].reduce((acc, item) => {
    let finalList = acc
    
    if (typeof item === "string") {
        finalList.nomes.push(item)
    } else if (typeof item === "number") {
        finalList.numeros.push(item)
    }

    return finalList
}, {nomes: [], numeros: []})
console.log(newList)
