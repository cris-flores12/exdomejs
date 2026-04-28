
const botaoAtivar = document.getElementById("btnAtivar");
const peca = document.getElementById("peca");
const statusTexto = document.getElementById("statusTexto");
const iconePeca = document.getElementById("iconePeca");
const tituloPeca = document.getElementById("tituloPeca");
const textoPeca = document.getElementById("textoPeca");

let pecaAtivada = false;

botaoAtivar.addEventListener("click", function() {
    pecaAtivada = !pecaAtivada; 
    
    if (pecaAtivada) {       
        peca.classList.remove("bloqueada");
        peca.classList.add("ativa");
        statusTexto.innerText = "Ativada";
        statusTexto.style.color = "#22c55e";
        iconePeca.innerText = "🧩";
        tituloPeca.innerText = "Peça Ativada";
        textoPeca.innerText = "Parabéns! Você ativou a primeira peça.";
        botaoAtivar.innerText = "Desativar";
    } else {
        peca.classList.remove("ativa");
        peca.classList.add("bloqueada");
        statusTexto.innerText = "Bloqueada";
        statusTexto.style.color = "#ef4444";
        iconePeca.innerText = "🔒";
        tituloPeca.innerText = "Peça Bloqueada";
        textoPeca.innerText = "Clique para ativar a peça.";
        botaoAtivar.innerText = "Ativar";
    }
});