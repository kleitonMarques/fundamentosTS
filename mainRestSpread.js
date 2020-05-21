// REST - Parte 1
console.log("REST - Pega o resto")

const usuario = {
    nome: 'Kleiton',
    idade: 31,
    empresa: 'Kleiton SA'
}
const { nome, ...resto } = usuario

console.log(nome)
console.log(resto)


// REST - Parte 2
const arr = [1, 2, 3, 4]
const [ a, b, ...c ] = arr

console.log(a)
console.log(b)
console.log(c)


// REST - Parte 3
function somaUm(...params) {
    return params.reduce((total, next) => total + next)
}

function somaDois(a, b, ...params) {
    return params
}
console.log(somaUm(1, 3, 4, 18))
console.log(somaDois(7, 9, 10, 16, 22))


// SPREAD - Parte 1
console.log("SPREAD - PEGA TODO O OBJETO")
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [ ...arr1, ...arr2 ]

console.log(arr3)

// SPREAD - Parte 2
const usuario1 = {
    nome: 'Kleiton',
    idade: 31,
    empresa: 'Kleiton SA',
}

const usuario2 = { ...usuario1, nome: 'Gabriel' }
console.log(usuario2)