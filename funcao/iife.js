// IIFE -> Immediately Invoked Function Expression
// Função autoinvocada


//É uma função anônima declarada envolta de parênteses e com mais dois parênteses no final
(function() {
    //pode-se declarar var, lets, const e funções a vontade que não terá risco de tocar no escopo global(a menos que vc force né kkkk)
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente!')
})()