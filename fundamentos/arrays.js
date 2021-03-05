/**
 * ARRAY
 * É dinâmico, cresce e diminui conforme a quantidade de dados
 * É heterôgenea
 */

const valores = [7.7, 8.9, 6.3, 9.2] 
console.log(valores[0], valores[3])
console.log(valores[4])//índice sem valor é dado como undefined

valores[4] = 10
//valores[11] = 62 //Olha só
console.log(valores)
console.log(valores.length)// ver o tamanho do array

//o método push() adiciona elementos no array
valores.push({id:3}, false, null, 'teste') // No JS o array suporta armazenar múltiplos tipos de dados no mesmo array
console.log(valores) // Mas não é boa prática, vai se dar B.O depois então cria um array para cada tipo dado

//Deletar elementos no array
console.log(valores.pop())// Ele retorna e exclui o último elemento do Array.
delete valores[0] //outra forma de deletar um elemento
//delete funciona no contexto de objeto, ele deleta chaves e valores dos objetos
console.log(valores)

console.log(typeof valores)