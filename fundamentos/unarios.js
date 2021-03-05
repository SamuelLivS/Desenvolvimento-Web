let num1 = 1
let num2 = 2

// Os operadores podem ser pré-fixados ou pós-fixados.
// Os pré-fixados tem uma precedência maior do que os pós. (Mais apressado)
num1++ //pós-fixado
console.log(num1)

--num1 // pré-fixado
console.log(num1)

console.log(++num1 === num2--) // O ++ foi executado antes da comparação e o -- foi executado depois da comparação
console.log(num1 === num2)
// Deixe seu código o mais simples possível!!!!!!!
// Evite colocar incrementos na mesma linha da comparação, não deixe seu código confuso, fuja dos complexos.
// Refatore seu código, mude nomes de variáveis, faça métodos simples, e sem comentários. 
