// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
            resultado += dados
            })

            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                reject(e)
                }
            })
        })
    })
}
//muitas callback dentro da outra, fica confuso
// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

//Sempre que chamar tiver uma promise chame o catch, sempre deixe seu código preparado para possíveis erros.

//método .all espera as promises serem resolvidas, e retorna uma matriz 
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])//posso passar várias promises, e quando todas forem resolvidas os métodos then serão chamados um após o outro.
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))

getTurma('D').catch(e => console.log(e.message))//