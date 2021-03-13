/**
 * break influencia dentro do switch, for e while.
 * o break interrompe a execução do laço ao qual ele está inserido.

 * continue influencia dentro do for e do while.
 * o continue interrompe a execução atual e pula pra próxima. Ex ele para uma repetição e vai pra repetição seguinte.
 * Tente evitar ao máximo o uso disso.
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums){
    if (x == 5) {
        break // Ele vai agir em cima do bloco mais próximo dele, que ele pode causar efeito, que é o caso do for.
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums){
    if(y == 5) {
        continue// Assim com o break ele interrompe o laço corrente e vai para a próxima execução
    }
    console.log(`${y} = ${nums[y]}`)
}

//NINGUÉM USA - ENTÃO NÃO USE PLEASE!!!
externo: for (a in nums){ //isso é o rótulo
    for (b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}