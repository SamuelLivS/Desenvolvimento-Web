const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)// Pra esse contexto preciso do this
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

/**
 * função bind()
 * serve para amarrar seu this em um contexto.
 * Como parâmetro do bind você passa o contexto que quer o this fixo.
 * Independente de como e onde voce chame, o this não vai variar.
 */
const falarDePessoa = pessoa.falar.bind(pessoa) //O bind 'amarra' o this à algum contexto
falarDePessoa()