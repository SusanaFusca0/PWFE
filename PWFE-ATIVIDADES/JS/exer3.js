function mostrar_promocao(){
    var mm = document.getElementById("medicamento");
    var pp = document.getElementById("preco");
    pp = Math.trunc(pp.value);
    document.getElementById("demo").innerHTML = "<b>Promoção de </b>" + mm.value + "<br><b>Leve 2 por apenas R$: </b>" + pp*2;
    
}