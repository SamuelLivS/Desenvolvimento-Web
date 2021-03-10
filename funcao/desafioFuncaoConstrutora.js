//Função construtora assim como a classe, serve como instancia para objetos.
//Também precisa do this, mas pode se feita sem ele, porém não vai ser possivel mudar o valor da variável depois.

function Pessoa(nome){ //Função construtora que o prof fez.

        this.nome = nome //Esqueci
    
    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

//Função construtora que EU FIZ, esqueci de referenciar o parâmetro com o contexto do objeto atual(this).
function Pessoa1(nome) {
    this.falar = () => console.log(`Meu nome é ${nome}`)
}

const p2 = new Pessoa1('João')
p2.falar()