const abba = document.querySelector("form")
const preco = document.querySelector("#valorTotal")

abba.addEventListener ("submit", (e) =>{
    const nome = abba.inQuilo.value; //obtém o nome digitado no form
    const nome2 = abba.inGramas.value; //obtém o nome digitado no form
    resp.innerText = `Olá ${nome}`; // exibe a resposta do programa
    e.preventDefault (); //vai envitar que o form envio os dados pro destino.php
})