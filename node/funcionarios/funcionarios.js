const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


//Mulher chinesa com o menor salário.
const mulheres = funcionarios => funcionarios.genero === 'F'
const chinesas = funcionarios => funcionarios.pais === 'China'
const menorSalario = (anterior, atual) => { 
return anterior.salario < atual.salario ? anterior : atual
}

axios.get(url).then(response =>{
    const funcionarios = response.data

console.log(funcionarios.filter(mulheres).filter(chinesas).reduce(menorSalario))
})

