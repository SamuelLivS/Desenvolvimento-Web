/**
 * o foreach passa 3 parâmetros para a callback, são eles o elemento, o índice e o próprio array ao qual ele está percorrendo
*/
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))//pode-se pegar apenas um dos parâmetros

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)// também dá pra uma const ou let para armazenar um função e passa-la como callback.