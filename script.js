const menuBtn = document.getElementById("menuBtn");
const links = document.getElementById("links");

menuBtn.addEventListener("click", function () {
  links.classList.toggle("open");
});

document.querySelectorAll("#links a").forEach(function (link) {
  link.addEventListener("click", function () {
    links.classList.remove("open");
  });
});

const form = document.getElementById("interestForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value.trim();

  mensagem.textContent = "Obrigado, " + nome + "! Este formulário é demonstrativo e ainda não envia os dados.";
  form.reset();
});
