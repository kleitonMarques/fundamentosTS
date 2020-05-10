/*
// A contante nao pode receber um novo valor, mas o objeto pode ser mutavel
const usuario = { nome: 'Diego' }
usuario.nome = 'Kleiton'
console.log(usuario)
*/

function teste(x) {
    let y = 2;

    if(x > 5) {
        let y = 4;
        console.log(x, y)
    }
}

teste(10)