const _ = require('lodash') //Usando uma dependência de terceiros
//nodemon executa o node, e dá um refresh automaticamente quando o código é editado.
setInterval(() => console.log(_.random(500, 600)), 2000)