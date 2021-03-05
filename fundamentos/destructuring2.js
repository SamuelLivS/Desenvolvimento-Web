// É mas pra você saber.
//destructuring em Array.
// operador destructuring sempre fica na esquerda da declaração
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6=0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9,6,8]]//Ignorei o primeriro elemento e vá pro segundo, quero o segundo elemento do segundo array
console.log(nota)

