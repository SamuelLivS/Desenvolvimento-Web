// Exemplo callback no Browse
                                                    //aqui o callback
document.getElementsByTagName('body')[0].onclick = function(e) {console.log('O evento ocorreu!')}

//getElementsByTagName
//Essa função vai retornar um array, e mesmo só tendo um body na página vc precisa especificar qual o índice do Array vai usar.
//cada click no body da página a callback será disparada. TESTA AE!