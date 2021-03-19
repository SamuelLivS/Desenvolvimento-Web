require('./global')// Para tornar o global disponível em outro arquivo basta carrega-lo e pronto, não precisa armazenar em variável.
//Use com cuidado, aliás evite, a menos que seja mesmo necessário, não é atoa que o node tem o sistema de módulos né? 
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // Obj global que pode ser alterado em qualquer lugar
console.log(MinhaApp.nome)