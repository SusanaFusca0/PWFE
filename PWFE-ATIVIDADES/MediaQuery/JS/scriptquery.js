let n = 0;
function adicionar(){
    n++;
    document.getElementById("num").innerHTML = n;
    if(n <= -1){
        document.getElementById("num").innerHTML = "Contagem Inválida";
    }
}
function subtrair(){
    n--;
    document.getElementById("num").innerHTML = n;
    if(n <= -1){
        document.getElementById("num").innerHTML = "Contagem Inválida";
    }
}