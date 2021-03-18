/**
 *              EM JS
    Atribuição por referência é quando uma variável aponta
    para o endereço onde está armazenado determinado valor.
    Ela não armazena o valor em si dentro dela, apenas o endereço.
    Ex:
    const a = {nome: 'Pão'} - apontou para o esse endereço

    const b = a - b recebeu o que a está armazenando, ou seja
    b recebeu a referência daquele objeto.

    E já que ambos apontam para a mesma referência(mesmo obj),
    esse obj pode ser alterado a partir de qualquer uma das variáveis.
    Isso funciona com objetos, funções e dá uma olhada se funciona com outro tipo de dado.
----------------------------------------------------------------------------------
    Já com os tipos primitivos a atribuição é feita através da cópia 
    por valor, onde cada variável tem seu valor independente, ou seja
    agora sim o valor é armazenado e não o seu endereço.
    Ex: let c = 3
    let d = c - aqui foi passado o valor de c, não a referência
    se vc mudar qualquer uma das variáveis vai perceber que a outra não sofre a mesma alteração.
------------------------------------------------------------------------------------
    Se você quiser zerar uma variável, utilize o null, mas cuidado, pois não será possivel acessar qualquer atributo ou
    método dessa variável.

    Undefined é atribuido pela própria linguagem, quando uma variável foi declarado mas não inicializada, evite atribuir 
    undefined manualmente, deixe a linguagem decidir isso, utilize o null.
 */

 let valor //não inicializada
 console.log(valor) // Nunca foi inicializada NUNCA
 //console.log(valor2) // Nem declarada foi! Testa ae

 valor = null // Ausência de valor, não aponta pra lugar nenhum
 console.log(valor)
 // console.log(valor.toString()) // Erro!

 const produto = {}
 console.log(produto.preco)
 console.log(produto)

 produto.preco = 3.50
 console.log(produto)

 produto.preco = undefined // evite atribuir undefined
 console.log(!!produto.preco)
 // delete produto.preco
 console.log(produto)

 produto.preco = null // sem preço
 console.log(!!produto.preco)
 console.log(produto)