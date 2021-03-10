//REVISAR DEPOIS!!
//Pode passar parâmetros para personalizar seu objeto.
function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
        //tbm pode colocar funções aqui para retornar.
    }
}

console.log(criarProduto('Laptop Acer', '1.200,00'))
console.log(criarProduto('iPad', 1199.49))