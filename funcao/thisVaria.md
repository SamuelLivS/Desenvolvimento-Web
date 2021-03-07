## O THIS
this refêrencia o objeto ao qual faz parte. Disso tu sabe.

Mas o this em JS varia muito dependendo do contexto.
No browser o this é o window.
No node o this é o module.exports.
porém no próprio browser ele pode variar e MUITOOOO.
Pode apontar pro elemento 'body' do HTML.

Aula 69. this pode variar, assiste denovo, esse fdp pode quebrar aplicações. CUIDADO

## This em function e Arrow function
o this nas Arrow function não varia, mas pode variar numa função normal.

* Função normal, o this vai depender de como e onde você chamou ela.
* Arrow function, o this é definido a partir do momento que você define a função, ou seja não importa de onde e como vc chame, ele sempre vai referênciar o contexto que foi declarado(contexto léxico).