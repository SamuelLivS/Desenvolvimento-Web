//Implementando o reduce (Forma Simplificada!!!!!!!)
Array.prototype.reduce2 = function(callback, valorIncial) {
    const indiceInicial = valorIncial ? 0 : 1 // se o valor inicial estiver setado, vai comecar do índice 0 ou 1.
    let acumulador = valorIncial || this[0] // se tiver valor inical vai começar por ele.
    for(let i=indiceInicial; i<this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)//O resultado atual, vai ser acumulado e passado pra próxima chamada.
    }
    return acumulador // no final tudo que foi acumulado é retornado.
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))
console.log(nums.reduce2(soma, 21))