function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params){//Primeiro recebe a função construtura, e depois utilizando o spread recebe os outros parâmetros.
    const obj = {}
    obj.__proto__ = f.prototype// Atribuindo o prototype da função como protótipo para o objeto criado.
    f.apply(obj, params)//pego o objeto como contexto e joga os parâmetros dentro dele.
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)