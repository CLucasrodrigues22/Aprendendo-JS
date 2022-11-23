function retornaPrimeiroEultimo(item) {
    const primeiro = item.shift() 
    const ultimo = item.pop() 

    console.log([primeiro, ultimo])
}


retornaPrimeiroEultimo([1, '414', 3, 21, 'eafa', 'abc', 23])