function inteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

let opcao = 0

//enquanto opcao for diferente de -1, faça 
while(opcao != -1) {
    opcao = inteiroAleatorioEntre(-1, 2)
    console.log(`Opção escolhida foi ${opcao}`)
}
//se a opcao for igual a -1, faça
console.log('Fim')