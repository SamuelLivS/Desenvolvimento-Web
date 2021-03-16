const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//Removendo o último elemento do Array
pilotos.pop() // Massa quebrou o carro!
console.log(pilotos)

//Adicionando um novo elemento na última posição
pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro da lista
console.log(pilotos)

pilotos.unshift('Hamilton')// Adiciona um elemento na primeira posição
console.log(pilotos)

// splica pode adicionar e remover elementos.

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

//Gerar um novo array a partir de um "pedaço" de outro.
const algunsPilotos1 = pilotos.splice(2) // a partir do índice 2 crie um novo array.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.splice(1, 4)// a partir do 1 até o 4 sem incluir o 4.
console.log(algunsPilotos2)