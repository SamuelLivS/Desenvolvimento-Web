/**
 * VIA DE REGRA SEMPRE USE O === POIS É MAIS SEGURO PARA 'TRATAR' OS DADOS E COMO ELES SE RELACIONAM SEM MISTURAR OS TIPOS
 */
console.log('01)', '1' == 1) // comparando valor
console.log('02)', '1' === 1)// comparando valor e o tipo ('estritamente iguais')
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // zero significa a data de referência de JavaScript que é 01/01/1970
const d2 = new Date(0) 

//Em ambos os casos vai dá false pq está comparando a refeência de memória (endereço de memória)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)


console.log('11)', d1.getTime() === d2.getTime()) // getTime retorna o valor desde a data de referência até hj em milissegundos do tipo Number,
//por isso são estritamente iguais.


console.log('12)', undefined == null)
console.log('13)', undefined === null)
