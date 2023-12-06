function exibir(){
    let p = parseFloat(document.getElementById("preco").value);
    document.getElementById("demo").innerHTML += "<br>Opções de Pagamento<br>";
    for(var i=0; i<10; i++){
        let cont = p/(i+1);
        let contArredondado = cont.toFixed(2);
        document.getElementById("demo").innerHTML += "<br>" + (i+1) + "x de R$: " + contArredondado;
    }
}