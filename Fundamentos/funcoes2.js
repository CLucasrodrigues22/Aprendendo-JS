//armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma (2, 5)

//armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(4, 5))

//retorno implícito de uma arrow
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!')