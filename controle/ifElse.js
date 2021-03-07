const imprimirResultado = function(nota) {
    if(nota >= 7){
        console.log('Aprovado')
    }else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa')// Esse é o foda das linguagens fracamentes tipadas.
//Tem modos para testar se os parâmetros que foram passados são mesmos os que a função precisa, mas isso vai aparecer conforme seus estudos.