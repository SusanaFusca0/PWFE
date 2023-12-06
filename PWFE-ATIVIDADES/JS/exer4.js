function mostrar_notas(){
    let valorSaque = document.getElementById("valorSaque").value;//variavel com valor do saque
    let a = 0;//variavel com qtd de notas de 100
    let b = 0;//variavel com qtd de notas de 50
    let c = 0;//variavel com qtd de notas de 10
    document.getElementById("demo").innerHTML = valorSaque % 100;   
    if(valorSaque < 10){//condição para quando o valor for menor q 10
        alert("Impossível realizar esse saque, notas indisponíveis!")
    }else if(valorSaque % 100 == 0){//condição para quando o valor for redondo
        a = valorSaque / 100;
        a = Math.trunc(a);
        document.getElementById("demo").innerHTML = "Notas de R$100: " + a + "<br>Notas de R$50: " + b + "<br>Notas de R$10:" + c;
    }else if(valorSaque % 100 > 0){//condição para quando o valor for quebrado
        a = valorSaque / 100;
        a = Math.trunc(a);
        let resto100 = valorSaque % 100;
        let resto50 = resto100 % 50;
        if(resto100 == 50){//quando o resto de 100 é igual a 50
            b = 1;
            document.getElementById("demo").innerHTML = "Notas de R$100: " + a + "<br>Notas de R$50: " + b + "<br>Notas de R$10:" + c;
        }else if(resto100 < 50){//quando o resto de 100 é menor q 50
            b = 0;
            c = resto100 / 10;
            document.getElementById("demo").innerHTML = "Notas de R$100: " + a + "<br>Notas de R$50: " + b + "<br>Notas de R$10:" + c;
        }else if(resto100 > 50 && resto100 < 100){//quando o resto de 100 é maior q 50
            b = resto100 / 50;
            b = Math.trunc(b);
            c = resto50 / 10;
            document.getElementById("demo").innerHTML = "Notas de R$100: " + a + "<br>Notas de R$50: " + b + "<br>Notas de R$10:" + c;
        }
    }
}
