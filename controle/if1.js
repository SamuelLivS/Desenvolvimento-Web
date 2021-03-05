function soBoaNoticia(nota) {
    if(nota >= 7){ // Expressão relacional
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeiroEuFalo(valor){
    if(valor) { // Expressão de valor 
        console.log('É verdade...' + valor)
    }
}

// Em JS outros tipos de dados podem ser usados como boolean, logo tbm podem ser usados para condição nas estruturas de controle.
seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo(' ')
seForVerdadeiroEuFalo('?')
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo([1, 2])
seForVerdadeiroEuFalo({})
