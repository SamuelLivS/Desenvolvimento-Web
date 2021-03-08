/**
 * Arrow Function
 * Ser mais curta a sintaxe.
 * E o this é constante, ele é associado ao contexto que ela foi escrita.
 * Sempre é uma função anônima, vc sempre precisa armazenala numa variável ou constante.
 * 
 * Ajuda muito ao paradigma funcional(08/03/2021 'eu não faço ideia')
 * 
 */

let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //Quando se tira o corpo da função '{}' ela tem um retorno implícito - Apenas para funções de uma única linha.
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

//fuções sem parâmetros
ola = () => 'Olá'
ola = _ => 'Olá'//Essa possue sim um parâmetro válido mas você não é obrigado a passa-lo