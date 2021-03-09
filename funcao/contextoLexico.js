const valor = 'Global'

function minhaFuncao(){// Diretamente dentro do módulo do node
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()