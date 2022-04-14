function validaSenha(senha){
    validacao = true;
    if(senha.length < 6){
        alert("senha invalida");
        validacao = false;
    }
    return validacao;
}

function validaEmail(email){
    if(email.indexOf("@") == -1){
        alert("email invalido");
        validacao = false;
    }
    else if(email.indexOf(".com") == -1){
        alert("email invalido");
        validacao = false;
    }
    return validacao;
}