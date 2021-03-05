console.log(7 / 0) // infinito

console.log('3' + 2) // Aqui a string tem prefêrencia ao number, então o + irá concatenar
//No exemplo acima o jS percebe q + faz sentido sim concatenar uma string e um number, então ele não converte
//No exemplo abaixo o JS percebe que o / não faz sentido usado como string, então ele tenta converter para number.
console.log('3' - 2)
console.log("10" / 2) // O js converte a string para number, SE não conter nenhum caracter que não seja número ou .
console.log("Show" * 2)// Quando tem alguma caaracter "Inválido" ele não dá erro, apenas gera um NaN

console.log(0.1 + 0.7)// O js tem uma certa imprecisão com números, CUIDADO!

//console.log(10.toString()) - Não dá pra chamar uma função através do literal number
console.log((10.345).toFixed(2))// Salvo o uso de "( )"
console.log((10.345).toString(2))

