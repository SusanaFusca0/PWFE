let palavra = prompt("Digite uma palavra");
function inverter(){
    return palavra.split("").reverse().join("");
}
alert("Palavra: " + palavra + "\n" + "Invertida: " + inverter(palavra));