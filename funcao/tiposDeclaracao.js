console.log(soma(3, 4))// Ela sofre hoisting

//Os outros tipos por serem variaveis ou constantes ainda não tiveram seu valor atribuido...
//console.log(sub(3,4)) 
//console.log(mutl(3, 4))

// function expression
function soma(x, y){
    return x + y
}

// function expression
const sub = function (x, y){
    return x - y
}
console.log(sub(3,4))

// named function expression
const mult = function mult(x, y){// Única vantagem é qunado for debugar o código na stack, e ela terá seu nome e será mais fácil a indentificação de erros.
    return x * y
}
console.log(mult(3, 4))