const porta = 3003// QUALQUER COISA MUDA A PORTA

const express = require('express')
const app = express()
const bodyParser = require('body-parser')// tratar os dados que serão recebidos pelo servidor.
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))//trata os dados

app.get('/produtos', (req, res, next) => {//retorna todos os dados
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {// dado específico
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {// Cria um novo produto
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {//Altera um produto
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => { //Excluir
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})