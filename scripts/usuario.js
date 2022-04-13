var urlBase = "http://localhost:3000/usuarios"

class Usuario {
    constructor(user, password, email) {
        this.user = user;
        this.password = password;
        this.email = email;
    }

    save() {
        console.log('iniciando')
        fetch(urlBase, {
            method: 'POST',
            body: JSON.stringify(this),
            headers: {
                'Content-type': 'Application/json'
            }
        })
            .catch(erro => console.log(erro))

    }
}