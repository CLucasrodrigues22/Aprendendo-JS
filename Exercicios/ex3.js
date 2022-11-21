const calcSalario = (horas, valorPorHora) => {
    let calcMes = valorPorHora * horas
    console.log(`Salário igual a R$ ${calcMes}.`)
}

calcSalario(150, 40.5)