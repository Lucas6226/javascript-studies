function fatorial(n) {
    fatorial = 1
    for (c=n; c > 0; c--) {
        fatorial *= c
    }
    return fatorial
}

console.log(fatorial(5))