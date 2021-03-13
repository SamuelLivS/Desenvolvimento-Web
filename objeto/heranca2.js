// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //Não faça isso em casa!

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attrA, filho.attr0, filho.attr1, filho.attr2, filho.attr3)
// attrA = não foi definido em nenhum dos protótipos.
// attr0 tem no protótipo do avo.
// attr1 tem no protótipo do pai.
// attr2 tem no protótipo do filho.
// attr3 tem no próprio filho, logo ele não irá procurar no seu protótipo.

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing - sombreando os atributos do protótipo que já existe no escopo atual. Nessse caso sombreando o 'velMax'
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }//super serve para referenciar meu protótipo
}

Object.setPrototypeOf(ferrari, carro)// ferrari tem carro como protótipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)//Quando chama-se um objeto o toString só vai ler os atributos e funções que pertencem ao escopo local do objeto, mas não quer dizer que vc não poderá acessar os atributos do protótipos.
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())
volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
