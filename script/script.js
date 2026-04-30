const botaoAtivar = document.getElementById("btnAtivar");
const peca = document.getElementById("peca");
const statusTexto = document.getElementById("statusTexto");
const iconePeca = document.getElementById("iconePeca");
const tituloPeca = document.getElementById("tituloPeca");
const textoPeca = document.getElementById("textoPeca");

let pecaAtivada = false;
let linkAtivado = false;

botaoAtivar.addEventListener("click", function () {
  if (!pecaAtivada) {
    // Ativa a peça
    peca.classList.remove("bloqueada");
    peca.classList.add("ativa");
    statusTexto.innerText = "Ativada";
    statusTexto.style.color = "#22c55e";
    iconePeca.innerText = "🧩";
    tituloPeca.innerText = "Peça Ativada";
    textoPeca.innerText = "Parabéns! Você ativou a primeira peça.";
    botaoAtivar.innerText = "Desativar Peça";

    // Torna a peça clicável
    if (!linkAtivado) {
      peca.addEventListener("click", abrirLink);
      linkAtivado = true;
    }

    pecaAtivada = true;
  } else {
    // Desativa a peça
    peca.classList.remove("ativa");
    peca.classList.add("bloqueada");
    statusTexto.innerText = "Bloqueada";
    statusTexto.style.color = "#ef4444";
    iconePeca.innerText = "🔒";
    tituloPeca.innerText = "Peça Bloqueada";
    textoPeca.innerText = "Aguardando interação...";
    botaoAtivar.innerText = "Ativar Peça";

    // Remove o link
    if (linkAtivado) {
      peca.removeEventListener("click", abrirLink);
      linkAtivado = false;
    }

    pecaAtivada = false;
  }
});

function abrirLink() {
  window.open("https://cris-flores12.github.io/sitedom/", "_blank");
}

