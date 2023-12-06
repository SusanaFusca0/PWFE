function verificar(){
    let numero = document.getElementById("numero").value;//variavel com valor do numero
    if(numero%2 == 0){//pq quando é par o resto é 0
        document.getElementById("demo").innerHTML = "Resposta: " + numero + " é par";
    }else if(numero%2 > 0){//pq quando é ímpar o resto é maior q 0
        document.getElementById("demo").innerHTML = "Resposta: " + numero + " é ímpar";
    }
}