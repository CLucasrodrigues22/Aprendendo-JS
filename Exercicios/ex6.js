const inverso = (numero) => {
    let tipo = typeof numero
    if(tipo == "boolean") {
        console.log(!numero) 
    } else if (tipo == "number") {
        console.log(-numero) 
    } else {
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`) 
    }
}

inverso(-2000)