let jogos = [];

function cadastrarJogo() {
    let nome = document.getElementById("nome").value;
    let plataforma = document.getElementById("plataforma").value;

    let jogo = {
        nome: nome,
        plataforma: plataforma
    };

    jogos.push(jogo);

    document.getElementById("nome").value = "";
    document.getElementById("plataforma").value = "";

    exibirJogos();
}

function exibirJogos() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let jogo of jogos) {
        lista.innerHTML += `<p>${jogo.nome} - ${jogo.plataforma}</p>`;
    }
}