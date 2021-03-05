function rand([min = 0, max = 1000]){ // aqui está destructuring os atributos do array e passando como dois novos atributos para a função
    if(min > max) [min, max] = [max, min]//
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))// Passando um array
console.log(rand([992]))// Passando só um elemento o  outro vai assumir seu padrão(se tiver)
console.log(rand([, 10]))// apenas o segundo elemento
console.log(rand([]))// Passando um array vazio
//console.log(rand())// MESMO ESQUEMA NÃO DÁ PRA DESESTRUTURAR UM ELEMENTO UNDEFINED!!!!!!!!! EXECUTA E VÊ O ERRO
