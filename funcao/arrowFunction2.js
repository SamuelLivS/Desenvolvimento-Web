function Pessoa(){
    this.idade = 0

    setInterval(() => {//this do arrow não varia.
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa