/**
 * Diferente do for in que percorre o índice o for of é percorre valor
 * Dá pra usar em cima de arrays, strings, set e map.
*/

for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

//Dá pra usar o destructuring tbm
for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const start = new Set(['Pão', 'Mortadela', 'Aveia', 'Maracujá'])
for(let letra of start){
    console.log(letra)
}