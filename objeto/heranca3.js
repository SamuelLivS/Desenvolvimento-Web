const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) //o primeiro parâmetro dessa função indica qual o objeto que será usado como protótipo
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}// também é possível definir objetos com atributos, e propriedades desses atributos.
})

console.log(filha2.nome)// Embora não mostre os atributos de seu protótipo eles ainda estão lá.
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))//Mostra as chaves dos objetos.
console.log(Object.keys(filha2))

for(let key in filha2){// Jeito de mostrar TODOS os atributos desdo o obj até os protótipos de seus protótipos.
    filha2.hasOwnProperty(key) ?//forma lógica de verificar qual atributo é do próprio obj e qual não é.
    console.log(key) : console.log(`Por herança: ${key}`)
}