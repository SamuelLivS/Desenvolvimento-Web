let comparaComThis = function(param){
    console.log(this === param)
}
comparaComThis(global) // No contexto do node o this de uma função aponta para o obj global. - No caso do browse é o window.
//Obs: cuidado em atribuir valores a o this dentro de uma função, pois ela toca o escopo global.

const obj = {}
comparaComThis = comparaComThis.bind(obj)//Trocando do contexto global para o de um objeto específico.
comparaComThis(global)// Como o contexto foi trocado ele não referência mais o objeto global.
comparaComThis(obj)// A referência agr é o obj.

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)// Como a Arrow refêrencia o obj corrente ao qual foi escrita ela irá referenciar um módulo do node, pois foi escrita em um módulo.
comparaComThisArrow(module.exports)// Viu?

//O node é composto por módulos.
comparaComThis(this)// O this de fora aponta para o módulo atual do node (No caso o module.exports) e não para o global. Confuso né?
comparaComThisArrow(this)// nesse caso o this vai ser o this msm kkkkkkkkkkk
//Pelo fato da arrow ter sido declarada dentro do escopo do node.


//Arrow function x bind() --- Quem é o mais forte?
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)// Arrow function é muito mais firme que o bind, ela não muda de jeito nenhum o contexto ao qual foi criada.
comparaComThisArrow(module.exports)// Ela continua tendo a mesma referência.