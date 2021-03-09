const valor = 'Global'

// A funções não possuem somente seus atributos e métodos declarados dentro de si, ela também guarda o contexto léxico ao qual foi excrita.
function minhaFuncao(){// Declarada diretamente dentro do módulo do node(global)
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()// Embora chamada aqui, a função vai buscar dados no seu contexto léxico, no caso no escopo ao qual ela foi declarada
}

exec()