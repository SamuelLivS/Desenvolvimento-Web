const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()//os "()" é para invocar a função factory que foi retornada
const contadorD = require('./instanciaNova')()

// O node compartilha uma única instancia de um mesmo objeto, então se mudar no A o B vai perceber.
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

// Usando a factory vc pode "driblar" o node e criar várias instâncias do module.exports
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)