function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) { // funções async retornam uma promise
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros // resolve a promise
    } catch (e) {
        if (tentativas > 10) {
            throw "Não deu certo!!!" // rejeita a promise
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)// tratando o erro(não é a melhor forma de fazer isso, mas esso não é o foco!)
        }
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)

// gerarNumerosEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)