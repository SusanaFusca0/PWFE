function categorizarAluno(){
    //condiçaõ para nome
    let nome = document.getElementById("nome").value;
    document.getElementById("demo").innerHTML += nome + "</br>";
    //condição para traço
    retornarTraco()
    //condição para idade
    let idade = document.getElementById("idade").value;
    if(idade < 12){
        document.getElementById("demo").innerHTML += "<br>Categoria: Infantil<br>";
    }
    else if(idade > 12 && idade < 18){
        document.getElementById("demo").innerHTML += "<br>Categoria: Juvenil<br>";
    }
    else if(idade => 18){
        document.getElementById("demo").innerHTML += "<br>Categoria: Adulto<br>";
    }
}
function retornarTraco(){
    let nome = document.getElementById("nome").value;
    nome = nome.split(' ');
    for(let i=0; i <nome.length; i++){
        let letras = nome[i].split('');
        let tracos ="";
        tracos = tracos + " " + "-".repeat(letras.length);
        document.getElementById("demo").innerHTML += tracos;
    }
}