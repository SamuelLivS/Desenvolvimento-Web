// Tratar erros usando try/catch/throw.
// try é feito para colocar códigos com potencial para erro
// Evite mostrar pro seu usuário detalhes de estrutura, stack, mensagens que não façam sentido pro usuário.
// Mande mensagens simples, de fácil entendimento.

function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10 // Você pode lançar variaveis e objetos
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{ // tente executar isso...
        console.log(obj.name.toUpperCase() + '!!!!!!')
    } catch(e) { // se der erro ele automaticamente vem para cá
        tratarErroELancar(e)
    } finally { // vai ser chamado havendo ou não algum erro
        console.log('final')
    }
    
}

const obj = { nome: 'Roberto' } // não tem o atributo name, mas sim o nome.
imprimirNomeGritado(obj)