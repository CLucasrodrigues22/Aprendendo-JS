// Consultar mês pelo número
const numeroDoMes = (NumMes) => {
    switch(NumMes) {
        case 12: 
            console.log('Mês é referente a Dezembro')
            break
        case 11:
            console.log('Mês é referente a Novembro')
            break
        case 10:
            console.log('Mês é referente a Outubro')
            break
        case 9:
            console.log('Mês é referente a Setembro')
            break
        case 8:
            console.log('Mês é referente a Agosto')
            break
        case 7:
            console.log('Mês é referente a Julho')
            break
        case 6:
            console.log('Mês é referente a Junho')
            break
        case 5:
            console.log('Mês é referente a Maio')
            break
        case 4:
            console.log('Mês é referente a Abril')
            break
        case 3:
            console.log('Mês é referente a Março')
            break
        case 2:
            console.log('Mês é referente a Fevereiro')
            break
        case 1:
            console.log('Mês é referente a Janeiro')
            break
        default:
            console.log('Mês digitado é inválido')
    }
}

numeroDoMes(13)