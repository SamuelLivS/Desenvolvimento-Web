// Object.preventExtensions
const produto = Object.preventExtensions({ //prevenir extensões (OBVIAMENTE)
    nome:'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'//Pode alterar valores 
produto.descricao = 'Borracha escola branca'// Não pode adicionar atributos ou métodos
delete produto.tag// Pode excluir atributos e métodos existentes
console.log(produto)

//Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)//Selando um objeto
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'//Não pode adicionar nada
delete pessoa.nome//Não pode excluir nada
pessoa.idade = 29// Pode mudar valores
console.log(pessoa)

// Object.freeze = selado + valores constantes