function calcular(){
    const nome = document.getElementById("inNome").value;
    const masculino = document.getElementById("inMasculino").checked;
    const altura = document.getElementById("inAltura").value;

    let peso;
//let peso = masculino ? Math.pow(altura,2) * 22 : Math.pow(altura,2) * 21
    if(masculino){
        peso = 22 * Math.pow(altura , 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }document.querySelector("h3").innerText = `Peso ideal ${peso.toFixed(2)}`;

    return false;
}

function limpar(){
    document.querySelector("h3").innerText = "";
}