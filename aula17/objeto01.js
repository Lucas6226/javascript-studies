var amigo = {
nome:'jose', 
sexo:'masculino', 
peso:80, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p //this == amigo | nesse caso
}}

console.log(amigo.peso)
amigo.engordar(2)
console.log(amigo.peso)