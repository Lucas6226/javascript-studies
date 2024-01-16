const list = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, "lucas", "pedro"],
    ["lucas", "pedro", "joão", "alexandre"]
]

let newList = list[1].find(item => typeof item === 'string')
console.log(newList)