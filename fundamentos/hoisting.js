/**
* Hoisting - Içar - Jogar pra cima
* Quando vc chama a variável antes da linha de declaração dela, ela retorna undefined, pois o js declara todas as variáveis do 
    tipo var da aplicação antes de executa-la, mas só atribuirá valor no local onde for atribuído
*Evite usar essa funcionalidade, declare suas variáveis antes de usa-las.
*É bom saber o que é, pois pode ter algum efeito indesejado no seu sistema e vc já vai saber que o hoisting pode ser o problema... OU NÃO
* A variável do tipo var sofre hoisting

*/



/*
    A MESMA COISA QUE
    var a
    console.log('a =',a)
    a = 2
    console.log('a =',a)

*/
console.log('a =',a)
var a = 2
console.log('a =',a)


// DENTRO DE UMA FUNÇÃO - o efeito é o mesmo
function teste(){
    console.log('b =',b)
    var b = 2
    console.log('b =',b)
}

teste()


//Efeito de hoisting não funciona em lets e consts