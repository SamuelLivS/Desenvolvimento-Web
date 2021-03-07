/**
 * Mesmo se sua função não tiver nenhum parâmetro, você pode passar parâmetros sim.
 * Dentro da função você recuperar esses parâmetros através do "arguments".
 * arguments é um Array interno de uma função, ele possui todos os argumentos que foram passados como parâmetros.
 * Você pode passar quantos parâmetros quiser.
 * Essa é a forma antiga de fazer, hoje já tem um operador próprio pra fazer isso.
 */

function soma(){
    let soma = 0
    for( i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))