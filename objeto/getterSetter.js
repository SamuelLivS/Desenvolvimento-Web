const sequencia = {
    _valor: 1, // o "_" na frente do nome significa uma convenção, em que outro desenvolvedor vai saber que o seu interesse é manter esse atributo "privado", e sendo acessível apenas através de métodos getters e seters.
    get valor() {return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000 // É possivel mudar o valor livremente já que não existe atributos privados em JS.
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //O algorítmo não aceita número menor do que já está nele.
console.log(sequencia.valor, sequencia.valor)
