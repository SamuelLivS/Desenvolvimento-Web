/**
 * Atributos e métodos de objetos podem ser acessados através da notação ponto.
 * Novos atributos podem ser criado também através da notação ponto, uma flexibilidade que o JS permite.
 */

console.log(Math.ceil(6.1))//arredondar pra cima
console.log(Math.floor(6.1))//arredondar pra baixo

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const Obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(Obj3.nome)
Obj3.exec()
