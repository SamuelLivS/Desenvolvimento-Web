//Simplesmente coloque os parâmetros que espera receber
module.exports = function(...nomes){
    return nomes.map(nome => `Boa semana ${nome}!`)
}