function compras(trabalho1, trabalho2){
    //Todos operadores binários, com excessão da negação lógica que é unário.
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwaise xor - JS não tem um operador oficial para xor
    const comprarTv32 = trabalho1 != trabalho2 // o operador de diferença também funciona como um xor, se não lembra pesquisa a xor ae
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //jeito dinâmica de fazer um objeto, JS é foda!!!!!!!
    // internamente ele faz isso aqui
    // return {comprarSorvete: comprarSorvete, comprarTv50: comprarTv50, comprarTv32: comprarTv32, manterSaudavel: manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))