const usuario = {
    nome: 'Kleiton',
    idade: 31,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP'
    },
}

/*
const { nome, idade, endereco: { cidade } } = usuario

console.log(nome)
console.log(idade)
console.log(cidade)
*/

function mostraNome({ nome, idade }) {
    console.log(nome, idade)
}

mostraNome(usuario)