/**
 * Dá pra criar métodos dentro dos prototypes dos tipos padrões do JS.
 * Tome cuidado ao fazer isso, ou pode ter efeitos colaterais que podem quebrar sua aplicação.
 * Só faça isso se souber o que está fazendo.
 */
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


String.prototype.reverse = function (){ //criando uma funcionalidade dentro do prototype
    return this.split('').reverse().join('')//Usamos o this para referênciar o valor atual
}

console.log('Escola COd3r'.reverse())

Array.prototype.first = function (){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

/**
 * Também dá pra sobrescrever métodos que já existem na API do JS.
 * NÃO FAÇA ISSO!!!!!!!!! SÉRIO OLHA UM POUQUINHO DO QUE PODE ACONTECER COM A SUA APLICAÇÃO SE VOCÊ MEXER COM O QUE NÃO SABE!
 */
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'. reverse())//A sobreescrita deu um efeito colateral bem zuado....