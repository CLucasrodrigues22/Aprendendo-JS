//pegando indice de um array
const notas = [8.9, 8.4, 5.3, 8.7, 9.1, 4.2]

for(let indice in notas) {
    console.log(indice, notas[indice])
}

//exibindo atributo e valor de um objeto
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 32,
    peso: 65
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}