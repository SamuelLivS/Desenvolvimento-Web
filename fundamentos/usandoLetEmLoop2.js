/**
 * Olha a diferença do escopo do let e do var em usandoVarEmLoop2.js
 */
const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()