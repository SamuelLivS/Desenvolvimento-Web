// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario}//espalhando em um obj todos os atributos de outro obj.
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']//espalhando em um array todos os elementos de outro array.
console.log(grupoFinal)

//Como o array é meio que um objeto em JS então dá pra fazer isso, mas o inverso não
const testea = ['João e o pé de feijão', 'Pedro', 'Gloria Groove']
const testef = {nome: 'João P', nomes:'João e Maria', ...testea}
console.log(testef)
