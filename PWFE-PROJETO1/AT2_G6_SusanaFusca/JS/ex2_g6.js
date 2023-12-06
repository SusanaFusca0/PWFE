function adicionar() {
    var nome = document.getElementById("nome").value;//pegando o nome do paciente
    if (nome !== "") {
            var lista = document.getElementById("minhalista");//criando lista que irá guardar os nomes
            var novoItem = document.createElement("li");//criando um elemento da lista
            novoItem.innerHTML = nome;//passando o nome do paciente para o elemento criado
            lista.appendChild(novoItem);//inserindo o elemento na lista
    }else if (nome == ""){//condição para quando o input estiver vazio
        alert("Insira o nome do paciente!")
    }
}
function urgencia() {
    var nome = document.getElementById("nome").value;//pegando o nome do paciente
    if (nome !== "") {
        var lista = document.getElementById("minhalista");//criando lista que irá guardar os nomes
        var novoItem = document.createElement("li");//criando um elemento da lista
        novoItem.innerHTML = nome;//passando o nome do paciente para o elemento criado
        lista.insertBefore(novoItem, lista.firstChild);//inserindo o nome como primeiro elemento da lista
    }else if (nome == ""){//condição para quando o input estiver vazio
        alert("Insira o nome do paciente!")
    }   
}
function atender(){
    var lista = document.getElementById("minhalista");//criando variavel da lista
    if(lista.hasChildNodes() == ""){//condição para quando ñ tiver mais pacientes
        alert("Todos os pacientes foram atendidos!");
    }else{
        document.getElementById("atendendo").innerHTML = lista.firstElementChild.textContent;//forma para aparecer o primeiro nome que será atendido
        lista.removeChild(lista.firstChild);//removendo o primeiro elemento da lista
    }
}




