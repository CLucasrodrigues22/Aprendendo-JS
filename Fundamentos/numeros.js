const peso1 = 1.0
const peso2 = Number('2.0')
console.log(typeof peso1, typeof peso2)


const avaliacao1 = 9.232
const avaliacao2 = 6.324

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)


console.log(media.toFixed(1))//mostar resultado e exibir apenas o primeiro numero depois do ponto
console.log(media.toString(2))//converte o resultado para binário
console.log(typeof media)//mostra o tipo de dado