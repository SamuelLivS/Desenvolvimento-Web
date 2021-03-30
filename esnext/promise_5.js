function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        try{
            con.log('temp')
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e){
            reject(e)
        }
    })
}

//Erros podem ocorrer na função de origem ou na própria chamada do then.
//O erro será tratado no primeiro tratamento que ele achar(seja no catch ou no próprio then)

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v) //erro
        // err => console.log(`Erro Esp.: ${err}`) // Tratando erro diretamente em um then.
    )
    .then(() => console.log('Quase Fim!'))
    .then(err => console.log(`Erro Geral: ${err}`))//Normalmente colocamos o catch por último.
    .then(() => console.log('Fim!'))