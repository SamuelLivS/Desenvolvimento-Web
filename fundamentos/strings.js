const escola = "Cod3r" // O índice sempre começa do 0

console.log(escola.charAt(4))//pegar o valor no índice 4 (r)
console.log(escola.charAt(5))// pegar o valor no índice 5 (Não existe)
console.log(escola.charCodeAt(3))// pegar o valor no índice 3 e converter ao valor relacionado da tabela unicode.

console.log(escola.indexOf('3')) // o inverso da charAt, vai pesquisar o valor informado e retornar o índice.

console.log(escola.substring(1)) // retorna o valor a partir do índice informado
console.log(escola.substring(0,3)) // retorna o valor a partir do índice 0 até o índice 3 mas sem o 3 (vai até um índice a menos)

console.log('Escola '.concat(escola).concat('!')) // concatenando
console.log('Escola ' + escola + '!') // concatenando
// NO CONTEXTO DE STRING O + IRÁ CONCATENAR, MAS NO CONTEXTO DE NUMBER ELE VAI SOMAR CUIDADOO!!!!

console.log(escola.replace(3,'e')) // É para mudar o ídice 3 para 'e' - pode usar regex

console.log('Ana, Maria, Pedro'.split(','))// Quebrar uma string em um Array

//valor literal  é o valor sem está armazenado em uma variável.