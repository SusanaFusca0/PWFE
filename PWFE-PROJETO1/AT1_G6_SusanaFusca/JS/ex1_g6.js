function cc(){
    let num1 = document.getElementById("num").value;//pegando o numero
    let seq = [];//criando sequencia
    seq.push(num1);//adicionando o numero inicial (digitado) na sequencia
    for(let i=0; i < 10; i++){
        num1++;
        seq.push(num1);//adicionando o numero com acrescimo na sequencia
    }
    document.getElementById("cc").innerHTML += seq;
}
function dc(){
    let num2 = document.getElementById("num").value;//pegando o numero
    document.getElementById("dc").innerHTML += num2;//colocando o numero inicial (digitado) na sequencia
    do{
        num2--;//diminuindo os numeros
        document.getElementById("dc").innerHTML += "," + num2;//adicionado os numeros da sequencia          
    }while(num2 != 0);
    
    document.getElementById("dc").innerHTML += seq;
    
}