let nomeUsuário = "";
let elemento = document.querySelector('#nome-usuario');

while (nomeUsuário == ""){
    nomeUsuário = prompt("Qual seu nome?");
}

if (nomeUsuário == null){
    elemento.textContent = "seja bem vindo!"
}else{
    elemento.textContent = nomeUsuário;
}