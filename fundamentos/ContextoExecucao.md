# Tenha consciência do Runtime
Se caso estiver executando JS no front-end estará usando o Browse, se for o back-end será no node.

Fuja do escopo global, evite variáveis que subam pro escopo global, a menos, que sejam const (que não varia de valor), fuja disso. BAD SMELL!!!!!!!!!!

Uma forma de fugir do escopo global, é usando objetos.
---------------------------------------------------------
## Browse - Window
Obj global no Browse é o window.
aqui tudo o que é declarado vai parar no objeto window, e isso pode acarretar em sérios problemas, principalmente com o uso do
var que além de está visível em todo o escopo global, não aponta nenhum erro se ela for declarada mais de uma vez, pois ela só irá sobrescrever o valor atual.
Já o const e o let não, embora também estejam no escopo global, não poderão ser declaradas mais de uma vez, apenas ter o valor sobreescrito, claro que no const isso tbm não é possivel pois é uma constante.
Let e const embora globais não vão para o objeto window.

funções nomeadas(do tipo expressão) também vao para o escopo global, porém se ela for armazanada em uma const ou let não irá para o window.

let pessoa = {nome:'Ana', falar:function() {return `Eu sou ${this.nome}`}}
Nesse caso o this é o próprio objeto
O objeto pessoa está no escopo global, mas seus atributos e métodos não.
### This no Browse
this === window == true
----------------------------------------------------------
## This
No contexto global o this referencia todo o escopo global, mas se ele for chamado no escopo de um objeto, ele só irá referênciar esse objeto.
Ele varia conforme o contexto chamado.
---------------------------------------------------------
## Node - Global
Global no módulo atual do node equivale ao window do browse.
 * O NODE TRABALHA COM MÓDULOS!!!!! LOGO O GLOBAL DO NODE É O MODULE.EXPORTS(VÍSIVEL FORA DO MÓDULO ATUAL, PARA TODOS OS OUTROS MÓDULOS), ENQUANTO O OBJ GLOBAL É SOMENTE O CONTEXTO LÉXICO DO MÓDULO ATUAL.

### This no Node
this === module.exports
module.exports === obj global do node

* dentro do node todo arquivo é um módulo diferente. //Vai entender melhor
* global é vísivel em todo o módulo atual.
* module.exports é vísivel fora desse módulo.

CUIDADO em declarar variaveis sem o var, let ou const. Vai dá ruim.
