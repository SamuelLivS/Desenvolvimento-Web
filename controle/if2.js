function teste1(num){
    if(num > 7)
        console.log(num) // se for uma única sentença pode-se usar ou não as chaves.

    console.log('Final')
}

teste1(6)
teste1(8)

//NÃO É UM CÓDIGO CERTO!!!!!!!!!!!
function teste2(num){
    if(num > 7); { // cuidado com o ';', não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)

