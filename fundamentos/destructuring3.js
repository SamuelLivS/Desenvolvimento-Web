function rand({min = 0, max = 1000}){ // aqui está destructuring os atributos do objeto e passando como dois novos atributos para a função
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj)) //passando objeto
console.log(rand({min:955})) //passando só um valor
console.log(rand({})) //passando objeto vazio
//console.log(rand()) // passando nada, dá erro, pois a função vai tentar desestruturar um objeto que não existe