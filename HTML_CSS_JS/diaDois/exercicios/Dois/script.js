/*Atividade 2 — Nome Completo
Peça o nome e o sobrenome do usuário e mostre o nome completo.*/

let nomeCompleto = prompt("Digite seu nome e o sobrenome:");

let arrName = nomeCompleto.trim().split(" ");

if (arrName.length <= 1) {
    alert("Você não colocou o sobrenome!");
} else {
    alert("Seu nome completo é: " + nomeCompleto);
}