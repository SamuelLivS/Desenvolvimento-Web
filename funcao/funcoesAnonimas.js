/**
 * Função anonima é uma função sem nome.
 * Pode passa-la como parâmetro para outra função ou armazenala em uma variável.
*/

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)//pode-se passar diretamento a função que já é padrão. Não muda nada.
imprimirResultado(3, 4, function (x, y){//pode-se passar uma função anônima diretamente como parâmetro.
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)// Toda Arrow function é anônima.

const pessoa = {
    falar: function (){
        console.log('Opa')
    }
    /* 
    No ES6 essa sintaxe tbm é válida;
        falar(){
            console.log('Opa')
        }
    */
    
}

pessoa.falar()// Acessando função anônima através de um atributo de um objeto.