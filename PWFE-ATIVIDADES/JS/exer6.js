function citar(){
    //PEGANDO O VALOR DO INPUT E COLOCANDO NA VARIAVEL
    let nome = document.getElementById("nome").value;
    //SEPARANDO AS PALAVRAS 
    let palavras = nome.split(' ');
    //PEGANDO A ULTIMA PALAVRA
    let ultimaPalavra = palavras[palavras.length - 1];
    ultimaPalavra = ultimaPalavra.toUpperCase();//deixando a ultima palavra maiuscula
    //PEGANDO A LETRA DA PRIMEIRA PALAVRA
    let primeiraPalavra = palavras[0];
    let letraPrimeiraPalavra = primeiraPalavra.charAt(0);//pegando a letra da primeira palavra
    letraPrimeiraPalavra = letraPrimeiraPalavra.toUpperCase();//deixando a letra da primeira palavra maiuscula
    //PEGANDO A LETRA DA SEGUNDA PALAVRA
    let segundaPalavra = palavras[1];
    let letraSegundaPalavra = segundaPalavra.charAt(0);//pegando a letra da segunda palavra
    letraSegundaPalavra = letraSegundaPalavra.toUpperCase();//deixando a letra da segunda palavra maiuscula
    //MOSTRANDO CITAÇÃO NO HTML
    document.getElementById("demo").innerHTML = "<b>Citação Bibliográfica: </b>" + ultimaPalavra + ", " + letraPrimeiraPalavra + "." + letraSegundaPalavra + ".";
}

//toUpperCase deixa a letra maiúscula
//lenght serve pra pegar um valor do array
//charAt é pra pegar um caracter(letra) de uma string