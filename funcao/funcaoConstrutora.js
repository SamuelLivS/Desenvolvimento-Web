//REVISAR DEPOIS!!
/**
 *  Função construtora é o método construtor do java
 *  Dentro dela se quiser um atributo ou função privada use as palavras let e const para declara-las,
 *  Se caso quiser algo público, use o this.
 */
function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    // método público
    this.acelerar = function () {//Use o this para tornar algo público dentro de uma função construtora.
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new Carro//Não é obrigatório colocar () ou parãmetros.
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)