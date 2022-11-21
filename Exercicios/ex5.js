const maiorOumenor = (num1, num2) => {
    if(num1 > num2) {
        console.log(`Número ${num1} é maior que ${num2}`)
    } else if (num1 === num2) {
        console.log(`Os número são iguais`)
    } else {
        console.log(`Número ${num2} é maior que ${num1}`)
    }
}

maiorOumenor(4, 2)