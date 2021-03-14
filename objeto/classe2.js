/**
 * Classe em JS é mais uma mudança de sintaxe
 * Por baixo é uma função construtora, com herança baseada em protótipos
 */
class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissão = 'Professor'){
        super(sobrenome)//super referência a super classe
        this.profissão = profissão
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva') //Passe um parâmetro para meu pai, e ele vai passar para o meu avo.
    }
}

const filho = new Filho
console.log(filho)