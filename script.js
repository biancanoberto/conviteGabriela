let telaAtual = 0;
const telas = document.querySelectorAll(".tela");
const musica = document.getElementById("bg-music");

// tocar música automaticamente se possível
window.addEventListener("DOMContentLoaded", () => {
  musica.play().catch(() => {});
});

function proximaTela() {
  telas[telaAtual].classList.remove("ativa");
  telaAtual = (telaAtual + 1) % telas.length;
  telas[telaAtual].classList.add("ativa");

  if (musica.paused) musica.play();
}

function confirmarPresenca() {
  const nomes = document.getElementById("nomes").value.trim();
  if (!nomes) {
    alert("por favor, digite os nomes dos convidados 💕");
    return;
  }

  const numero = "558187110960"; // WhatsApp da mãe
  const mensagem = `Aloha! 🌺 Aqui é ${nomes} e queremos confirmar nossa presença no aniversário da Gabriela! 💙`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
}

function reiniciar() {
  telas[telaAtual].classList.remove("ativa");
  telaAtual = 0;
  telas[telaAtual].classList.add("ativa");
}

/* 🌸 gerar flores e folhas automaticamente */
const imagens = [
  "assets/florrosa.png",
  "assets/florlilas.png",
  "assets/florazul.png",
  "assets/folha.png"
];

const fundos = document.querySelectorAll(".flores-bg");

fundos.forEach((floresBg) => {
  for (let i = 0; i < 25; i++) {
    const img = document.createElement("img");
    const tipo = imagens[Math.floor(Math.random() * imagens.length)];
    img.src = tipo;
    img.classList.add(tipo.includes("folha") ? "folha" : "flor");

    const tamanho = Math.random() * 60 + 40; // 40–100px
    img.style.width = `${tamanho}px`;
    img.style.left = `${Math.random() * 100}%`;
    img.style.top = `${Math.random() * 100}%`;
    img.style.animationDuration = `${5 + Math.random() * 5}s`;
    img.style.animationDelay = `${Math.random() * 3}s`;
    img.style.transform = `rotate(${Math.random() * 360}deg)`;

    floresBg.appendChild(img);
  }
});
