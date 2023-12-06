function adicionar_contato(){
    //criando variaveis para guardar os dados
    var a = prompt("Digite seu nome:");
    var b = prompt("Digite seu email:");
    //criando elemento li assim cada contato adicionado será um li
    var novali=document.createElement("li");
    //mostrando os dados
    novali.innerHTML = "Nome:" + a + ",Email:" + b ;
    var element=document.getElementById("demo");
    element.appendChild(novali); 
}