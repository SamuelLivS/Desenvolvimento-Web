/** Promise(Promessa)
 * Estrutura com objetivo representar uma operação assíncrona
 * Promessa cumprida ou Promessa rejeitada
 * 
 * PARAMETROS:
 * resolve é uma função que será chamada se a promessa for atendida e concluída.
 * reject é quando por algum motivo(erro ou situação anormal) vc quer rejeitar a promessa.
 */

//REASSISTIR

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(frase)//Só aceita um parâmetro
            // reject(frase)
        }, segundos * 1000)
    })
}

/**
 * .then e catch são funções disponíveis na Promise
 * 
 * 
 * THEN(caso retorno seja resolve)
 * É a forma correta de acessar um resultado atendido.
 * vc pode encadear uma atrás da outra, a resposta de um then será usado como parâmetro do then seguinte.
 * 
 * CATCH(caso retorno seja reject)
 * forma de tratar o erro, e só pode ser chamada apenas uma vez
 */

falarDepoisDe(3, 'Que legal!')//tem como resposta uma promise
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    // .catch(e => console.log(e))