/**
 * Variável definida com var só tem 2 escopos possíveis
 * Nível global - de uma forma geral (node tem umas particularidades)
    Ela é visivel em toda a aplicação.
    Evite usar var pois embora possa ser acessada em qualquer parte da aplicação, isso tbm pode acarretar em uma sobrescrita
    acidental da variável, quebrando todo seu código.
 * Nível de função 
    Ela só é visivel dentro do escopo da função.
    O que acontece com ela dentro da função fica na função ;)
 */

{
    {
        {
            { 
                var sera = 'Será??'//toda var pode estar dentro de qualqer bloco de código(que não seja função) que ela será visível mesmo assim.
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local) // Viu??