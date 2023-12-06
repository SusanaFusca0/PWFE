function verificar(){
    let senha = document.getElementById("senha").value;
    let tamanho = senha.lenght;
    let aa = "";
    if(tamanho > minCaractere && tamanho < maxCaractere && /[0-9]+/gm.test(senha) && /[a-z]/gm.test(senha) && /[A-Z]/gm.test(senha) && /[!||@||#||$||%||*||(||)||_]/gm.test(senha) ){
        document.getElementById("demo").innerHTML = "Senha válida!"
    }
    if(senha == ""){
        alert ("Digite uma senha!");
    }
    if(tamanho < 8 && tamanho > 15){
        aa += "possuir entre 8 e 15 caracteres,";
    }
    if(/[0-9]+/gm.test(senha)){
        aa += "possuir números(no mínimo 1),";
    }
    if(/[a-z]/gm.test(senha)){
        aa += "possuir letras minúsculas(no mínimo 1),";
    }
    if(/[A-Z]/gm.test(senha)){
        aa += "possuir letras maiúsculas(no mínimo 2),";
    }
    if(/[!||@||#||$||%||*||(||)||_]/gm.test(senha)){
        aa += "possuir símbolos(no mínimo 1),";
    }
    document.getElementById("demo").innerHTML = "Erro..." + aa;
}

