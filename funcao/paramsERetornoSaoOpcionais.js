function area(largura, altura){// Voce pode passar quantos paramentros quiser mais ou menos do que a função necessita.
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else{
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))// menos
console.log(area())// nenhum
console.log(area(2, 3, 17, 22, 44))// mais
console.log(area(5, 5))