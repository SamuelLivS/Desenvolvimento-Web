/**
 * For In percorre pelo índice do Array e não pelos valores.
 * Existe alternativas melhores para percorrer um Array.
 */
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){// percorrer os índices de um Array
    console.log(i, notas[i])
}

// Alem de percorrer um Array, tmb consigo acessar os atributos de um objeto.
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){// percorrer os atributos
    console.log(`${atributo} = ${pessoa[atributo]}`)
}