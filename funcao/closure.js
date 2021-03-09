//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função

//Contexto léxico em ação!

const x = 'Global' //Está no obj global

//todo o escopo de fora desse função é o contexto léxico dela - Isso é o closure
function fora(){
    
    const x = 'Local'// Está no local da função fora()

    //closure é basicamente esse espaço todo envolta de uma função
    function dentro(){ //Ela vai buscar o 'x' no contexto léxico dela ou no contexto mais próximo dela.
        return x
    }
    
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())