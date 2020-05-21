const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
console.log(usuarios)


const idadeUsarios = usuarios.map(function(userIdade) {
    return userIdade.idade
})
console.log(idadeUsarios)


const usariosRocktMaiorDeIdade = usuarios.filter(function(users) {
    return users.idade > 18 && users.empresa === "Rocketseat"
})
console.log(usariosRocktMaiorDeIdade)

const funcionarioGoogle = usuarios.find(function(funcGoole) {
    return funcGoole.empresa === "Google"
})
console.log(funcionarioGoogle)