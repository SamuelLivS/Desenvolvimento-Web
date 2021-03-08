function Pessoa(){
    this.idade = 0

    //Uma outra forma além do bind() é armazenar o contexto atual dentro de uma const.
    const self = this // Solução 1 ----------

    setInterval(function(){ /*Aqui quem chama o this é o setInterval, logo o this está referênciando o contexto dele
                            não o contexto do objeto pessoa. O bind pode resolver isso.*/
        //self.idade++ // Solução 1 ----------

        this.idade++    

        //console.log(self.idade) // Solução 1 ----------

        console.log(this.idade)
    }/*.bind(this) //solução 2 */, 1000)//setInterval serve como um temporizador para disparar algum evento em um tempo contado em milisegundos.
    // o this como parâmetro está referenciando o contexto do objeto pessoa.

}

new Pessoa