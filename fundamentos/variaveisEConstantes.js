var a = 3
let b = 4

var a = 3 // var pode ser redeclarada
//let b = 40  -- let não
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
//c = 5
console.log(c)

//Quanto mais const melhor para manter o código
//Tudo que não precisar mudar de valor coloque const, se precisar prefira let ao invés de var