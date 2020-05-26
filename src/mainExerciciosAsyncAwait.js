// Função delay aciona o .then após 1s - EXERCICIO 1 --------------------------------------------
/*
const delay = (text) => new Promise(resolve => {
    setTimeout(() => { resolve(text) }, 1000)
});

const umPorSegundo = async () => {
    console.log(await delay('1s'))
    console.log(await delay('2s'))
    console.log(await delay('3s'))
}
umPorSegundo();
*/

// EXERCICIO 2 --------------------------------------------
/*
import axios from 'axios';
async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response)
    } catch (err) {
        console.log('Usuário não existe');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
*/

// EXERCICIO 3 --------------------------------------------
/*
import axios from 'axios';
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response)
        } catch {
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
*/

// EXERCICIO 4 --------------------------------------------
import axios from 'axios';
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response)
    } catch {
        console.log('Usuário não existe')
    }
}
buscaUsuario('kleitonMarques');