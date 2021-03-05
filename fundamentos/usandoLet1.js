/**
 * LET
    let respeita o escopo ao qual foi declarada
    tem escopo global, função e de bloco
 */
var numero = 1
{
    let numero = 2
    console.log('dentro', numero)
}
console.log('fora =', numero)

let numero2 = 3
{
    let numero2 = 4 // Ele sempre procura a partir do escopo menor(atual)
    console.log('dentro', numero2)
}
console.log('fora =', numero2)