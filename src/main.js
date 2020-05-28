import api from './api'

class App {
    constructor() {
        this.repositories = []
        this.formEl = document.getElementById('repo-form')
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.getElementById('repos-list')
        this.registerHandlers()
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepositoty(event)
    }

    async addRepositoty(event) {
        event.preventDefault()
        const repoInput = this.inputEl.value

        if(repoInput.length === 0)
            return;

        const response = await api.get(`/users/${repoInput}`)

        console.log(response)

        const { name, bio, html_url, avatar_url } = response.data

        this.repositories.push({
            name,
            bio,
            avatar_url,
            html_url,
        })

        this.inputEl.value = '';

        this.render()
    }

    render() {
        this.listEl.innerHTML = ''

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))

            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.bio))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank')
            linkEl.appendChild(document.createTextNode('Acessar'))
            linkEl.setAttribute('href', repo.html_url)

            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl)
        })
    }
}

new App()