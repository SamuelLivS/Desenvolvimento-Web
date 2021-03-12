// CODIGO NÃO EXECUTÁVEL!!!

// Procedural
processamento(valor1, valor2, valor3)//Funções que manipulam dados.

//OO
//Mapear o mundo e abstrair para objetos.
objeto = {//objetos com atributos(dados) e métodos(funções) em seu interior
    valor1,
    valor2,
    valor3,
    processamento(){

    }
}

objeto.processamento() //foco passou a ser o objeto.

//Principios imoportantes:
// 1. Abstração
    //Mapear o mundo real em um objeto, dependendo de um contexto específico
    //Ex um sistema de uma oficina precisa de dados diferentes de um sistema do detran, embora em ambos os contextos um dos foco seja o veículo.
// 2. Encapsulamento
    //Esconder a implementação interna de um objeto, só podendo ser acessado através de uma interface.
    //Você abastece e liga seu carro, mas não precisa saber nem ter acesso de como esse processo é feito internamente.
// 3. Herança (prototype)
    //Filhos recebem características de seus pais, e dos pais deles e assim por diante.
// 4. Polimorfismo Múltiplas formas
    //Uma classe pode dar origem a múltiplos objetos.
    //Uma classe carro, pode ser usada como 'forma' para uma ferrari azul, camaro amarelo, fusca, uno etc.
    //Alguns adicionam mais atributos ou métodos, outros apenas mudam, mas todos vieram da mesma classe.