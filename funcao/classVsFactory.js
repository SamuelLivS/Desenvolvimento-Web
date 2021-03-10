//REVISAR DEPOIS!!
class Pessoa {//Classe serve como instancia para objetos.
    //precisa do this para tornar atributos e métodos públicos
    constructor(nome){//construtor da classe para inicializar as variáveis.
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = (nome) => {//Função factory retorna objetos.
    //não usa this, é uma vantagem pois como o this em JS varia muito, pode ser bastante útil.
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()
