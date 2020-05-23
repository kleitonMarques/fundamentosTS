const arr = [1, 2, 3, 4, 5, 6]
const [ arr1, ...arrRest ] = arr
console.log(arr1)
console.log(arrRest)
///


function soma(...soma) {
    return soma.reduce((total, next) => total + next)
}
console.log(soma(1, 2, 3, 7, 1000))

///


const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
const usuario2 = { ...usuario, nome: 'Kleiton' }
console.log(usuario2)

const usuario3 = { ...usuario, endereco: { cidade: 'Lontras' } }
console.log(usuario3)