const botao1 = document.getElementById("btnClique");
const botao2 = document.getElementById("btnMouse");
const botao3 = document.getElementById("btnDuplo");

botao1.addEventListener("click", function () {
    alert("Você clicou no primeiro botão!");
});

botao2.addEventListener("mouseenter", function () {
    alert("Você passou o mouse por cima do segundo botão!");
});

botao3.addEventListener("dblclick", function () {
    alert("Você deu um duplo clique no terceiro botão!");
});
