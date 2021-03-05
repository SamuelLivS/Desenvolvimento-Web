let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo)// convertendo para boolean

// para converter um valor para boolean é só usar o ! na frente do indentificador, ou o !!
//o ! é a negação então um true com ! é falso.
// E o !! é a negação da negação, ela corta o efeito da primeira negação.

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //string com espaço
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true)) //aqui ele avalia o valor que está sendo atribuido e não se a atribuição funcionou

console.log('os falsos...')
console.log(!!0)
console.log(!!'')//string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' '))//expressão com operador lógico --- || = "OU"

let nome = ''
console.log(nome || 'Desconhecido')