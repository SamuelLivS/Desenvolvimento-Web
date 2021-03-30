function esperarPor(tempo = 2000){
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

function retonraValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retonraValorRapido() {
    return 20
}

//Você vai fazer um await em cima de uma função que retorna uma promise.

async function executar(){//await só funciona com uma função async.

    let valor = await retonraValorRapido() // o await serve para extrair o valor de uma promise. Tira SÓ esse await.

    await esperarPor(1500)//o await executa uma linha de código por vez.
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)//await é assíncrono
    console.log(`Async/Await ${valor + 1}...`)
    
    await esperarPor(1500) //Executa e depois executa sem os await
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

// executar().then(console.log)