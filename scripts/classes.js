urlCadastro = "http://localhost:3000/cadastro"
class Contato{
    constructor(nome, usuario, senha, email){
        this.nome = nome
        this.usuario = usuario
        this.senha = senha
        this.email = email
    }
    salvar(){
        fetch(urlCadastro,{
            method: 'POST',
            body: JSON.stringify(this),
            headers:{
                'Content-type':'Application/json'
            }
        })
        .catch(erro => console.log(erro))
    }
    perfil(usuario,display){
        fetch(`${urlCadastro}/${usuario}`)
        .then(x => x.text())
        .then(data => display(data))
    }
}

