function obterSequenciac(){
    return JSON.parse(localStorage.getItem('sequenciac'))|| [];
}
function salvarSequenciac(lista){
    localStorage.setItem('sequenciac',JSON.stringify(lista));
}
function obterSequenciad(){
    return JSON.parse(localStorage.getItem('sequenciad'))|| [];
}
function salvarSequenciad(lista){
    localStorage.setItem('sequenciad',JSON.stringify(lista));
}
let seqc = obterSequenciac();
let seqd = obterSequenciad();

function cc(){
    let num1 = document.getElementById("num").value;//pegando o numero
    let seq = [];//criando sequencia
    seq.push(num1);//adicionando o numero inicial (digitado) na sequencia
    for(let i=0; i < 10; i++){
        num1++;
        seq.push(num1);//adicionando o numero com acrescimo na sequencia
    }
    document.getElementById("cc").innerHTML += seq;
    if(num1 && seq){
        listaNumeros.push({num1, seq});
        salvarListaNumeros(listaNumeros);
        document.getElementById("aa").innerHTML = listaNumeros;
    }
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