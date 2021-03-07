/**
 * É uma estrutura de múltiplas condições
 * Não é uma expressão relacional(booleano)
 * Tem de colocar o break, senão ele executa tudo a partir da expressão vdd
 *  default pode ficar em qualquer posição da estrutura, claro colocando o break.
 */

const imprimirResultado = function(nota) {
    switch (Math.floor(nota)){ // A expressão não é um valor booleano, mas sim um valor inteiro
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break;
        case 8: case 7: // Pode ser tanto uma condição embaixo da outra como do lado da outra
            console.log('Aprovado')
            break;
        case 6: case 5: case 4:
            console.log('Recuperação')
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break;
        default:
            console.log('Nota inválida')
            
    }
    console.log('Fim!')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
