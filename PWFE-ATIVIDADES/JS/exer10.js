function tabuada(){
    let num = document.getElementById("numero").value;
    for(var i = 0; i < 10; i++){//
        document.getElementById("demo").innerHTML += "<br>" + num + " x " + (i+1) + " = " + num*(i+1);
    }
}
