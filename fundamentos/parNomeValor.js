// par nome/valor
const saudacao = 'Opa' // contexto léxico(local físico que a var foi definida)

function exec(){// conjunto de chave/valor com a mesma chave mas em contextos diferentes não causam erros.
    const saudacao = 'Falaa' // contexto léxico 2 
    return saudacao
}

// Objetos são grupos de pares nome/valor.
const cliente = {//léxico1
    nome: 'Pedro',
    id: 1,
    idade: 32,
    peso: 90,
    endereco: {//léxico2
        id:3,
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

console.log(cliente.endereco.logradouro)
console.log(cliente.id)
console.log(cliente.endereco.id)