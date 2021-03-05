/*
 * função é um bloco de código nomeado, pra vc chama-la quantas vezes quiser.
    Pode ou não receber parâmetros e retornar dados
    Dê bons nomes,
 */

 //Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Não dá erro
imprimirSoma(2, 10, 4, 5, 6, 7, 8)//Ele pega só a quantidade de parâmetros a partir do primeiro e ignora o resto
imprimirSoma()// Não dá erro - Mas pode-se definir um valor padrão para os parãmetros

// Funcao com retorno
function soma(a, b = 1){//Assim que se defini uma valor padrão
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))// Viu a diferênça?
console.log(soma())// O primeiro não tem valor definido logo...