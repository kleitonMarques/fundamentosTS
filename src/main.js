class App {
    constructor() {
        this.repositories = []
        this.formEl = document.getElementById('repo-form')
        this.registerHandlers()
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepositoty(event)
    }

    addRepositoty(event) {
        event.preventDefault()
        this.repositories.push({
            name: 'rocketseat.com.br',
            description: 'Tire a sua ideia do papel e dê vida à sua startup',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'https://github.com/Rocketseat',
        })

        console.log(this.repositories)
    }
}

new App()