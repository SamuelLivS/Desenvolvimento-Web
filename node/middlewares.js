// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice+1))
        //middlewares = verifica se o array está setado, |middlewares[indice](ctx, () => execPasso(indice+1)|- vai retornar uma função e para executa-la eu coloco os parâmetros logo após o array.
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

const ctx1 = {}
exec(ctx, passo3, passo2, passo1)
console.log(ctx)

const ctx2 = {}
exec(ctx, passo1, passo3, passo2)
console.log(ctx)