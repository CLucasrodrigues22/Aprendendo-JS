// Função em JS é First-Class Object (Citizens)
// Higher-order function

// função em forma literal
function fun1(a = 0, b = 0) {
    console.log(`Soma = ${a + b}`)
}

fun1(2, 5)

// armazenar uma função em uma variável
const fun2 = function(a = 0, b = 0, c = 0) {
    console.log(`Resultado = ${(a + b) * c}`)
}

fun2(3, 5, 10)

// armazenar uma função em um array
const array = [function (a, b) { console.log(a + b)}, fun1, fun2]
array[2](3, 9)

// armazenar uma função em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'Olá'
}
console.log(obj.falar())

const obj2 = {}
obj2.falar = function (palavra) {
    console.log(`falar = ${palavra}`)
} 

obj2.falar('Iae')