/**
 * Função callback é quando vc passa uma função1 para outra função2 e quando determinado evento acontecer, a função1
 * será chamada de volta uma ou várias vezes.
*/

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){ //callback
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)// Aqui imprimir será disparada em todos os elementos do array(fabricantes)
fabricantes.forEach(fabricante => console.log(fabricante))
